const { Op } = require('sequelize');
const {
    Users,
    UsersInformation,
    UsersStores,
    InformationType,
    Stores,
    Orders,
    OrdersStatus
} = require('../models');

const UserController = {
    // GET
    getAllUsers: (req, res) => {
        Users.findAll()
            .then(function (results) {
                res.status(200).send(results);
            })
            .catch(function (error) {
                res.status(500).send(error);
            })
    },
    getUser: async (req, res) => {
        const userId = parseInt(req.params.id);
        
        if (isNaN(userId)){
            res.status(500).send('The user ID must be a number');
            return false;
        }
        
        const userData = { attributes: ['id', 'name', 'email'] };

        try {
            let user = await UserController.getUserById(userId);

            if (user) {
                const parsedUrl = req.url.split('/');
                const requestedData = parsedUrl[0] || parsedUrl[1];
                const historyDates = {
                    'from': req.query.from || null,
                    'to': req.query.to || null
                }

                switch (requestedData) {
                    case 'info':
                        user.information = await UserController.getUserInfo(userId);
                        break;
                    case 'stores':
                        user.stores = await UserController.getUserStores(userId);
                        break;
                    case 'history':
                        user.history = await UserController.getUserHistory(userId, historyDates);
                        break;
                    default:
                        user.information = await UserController.getUserInfo(userId);
                        user.stores = await UserController.getUserStores(userId);
                        user.history = await UserController.getUserHistory(userId, historyDates);
                }

                res.status(200).send(user);
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send(error);
        }
    },
    getUserById: async (ID) => {
        const userId = parseInt(ID);
        
        if (isNaN(userId)){
            return false;
        }
        
        const userData = { attributes: ['id', 'name', 'email'] };

        try {
            const results = await Users.findByPk(userId, userData);
            if (!results) {
                return false;
            } else {
                let user = {
                    'id': results.id,
                    'name': results.name,
                    'mail': results.email,
                };
                return user;
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send(error);
        }
    },
    getUserInfo: async (userId) => {
        const infoData = {
            where: { id_user: userId },
            raw: true,
            attributes: ['information'],
            include: [{
                model: InformationType,
                attributes: ['id', 'name']
            }]
        };

        try {
            const results = await UsersInformation.findAll(infoData);
            let information = results.map(i => ({
                'info_id': i['InformationType.id'],
                'info_type': i.information,
                'info_value': i['InformationType.name']
            }));
            return information;
        } catch (error) {
            throw error; 
        }
    },
    getUserHistory: async (userId, historyDates) => {
        let where = { id_user: userId }; 
        if(historyDates.from){
            where.datetime = {...where.datetime, [Op.gte]: historyDates.from};
        }
        if(historyDates.to){
            where.datetime = {...where.datetime, [Op.lte]: historyDates.to};
        }

        const ordersData = {
            where: where,
            raw: true,
            attributes: ['id','discount','datetime'],
            include: [
                {
                    model: Stores,
                    as: 'store',
                    attributes: ['name']
                },
                {
                    model: OrdersStatus,
                    as: 'status',
                    attributes: ['name']
                }
            ]
        };

        try {
            const results = await Orders.findAll(ordersData);
            let orders = results.map(o => ({
                'order_id': o.id,
                'order_discount': o.discount,
                'order_date': o.datetime,
                'order_store': o['store.name'],
                'order_status': o['status.name']
            }));
            return orders;
        } catch (error) {
            throw error; 
        }
    },
    getUserStores: async (userId) => {
        const storesData = {
            where: { id_user: userId },
            raw: true,
            attributes: [],
            include: [{
                model: Stores,
                attributes: ['id', 'name']
            }]
        };

        try {
            const results = await UsersStores.findAll(storesData);
            let stores = results.map(s => ({
                'store_id': s['Store.id'],
                'store_name': s['Store.name']
            }));
            return stores;
        } catch (error) {
            throw error; 
        }
    },

    // POST
    newUser: (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        
        if(!name || !email){
            res.status(500).send('Wrong body params');
            return false;
        }

        Users.create({'name':name,'email':email})
        .then(function(results){
            res.status(200).send(results);
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },
    newUserStore: async (req, res) => {
        const user = await UserController.getUserById(req.body.user);
        const store = req.body.store;
    
        if (!user || !store) {
            res.status(500).send('Wrong body params');
            return false;
        }
    
        try {
            await UsersStores.create({
                id_user: user.id,
                id_store: store,
            });
            res.status(200).send('User added to store successfully');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send(error);
        }
    },
    newUserInfo: async (req, res) => {
        const user = await UserController.getUserById(req.body.user);
        const info_type = req.body.type;
        const info = req.body.info;
    
        if (!user || !info_type || !info) {
            res.status(500).send('Wrong body params');
            return false;
        }
    
        try {
            await UsersInformation.create({
                id_user: user.id,
                id_type: info_type,
                information: info
            });
            res.status(200).send('User information added successfully');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send(error);
        }
    },

    // PATCH
    updateUserInfo: (req, res) => {
        const infoId = req.params.infoId;
        UsersInformation.findByPk(infoId)
        .then(function(results){
            if(results == undefined){
                res.status(404).send("The required information record does not exist");
            }else{
                results.id_type = parseInt(req.body.type) || results.id_type;
                results.information = req.body.information || results.information;

                results.save()
                .then(function(result){
                    res.status(200).send(result);
                })
                .catch(function(error){
                    res.status(500).send(error);
                })
            }
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },
    updateUser: async (req, res) => {
        Users.findByPk(req.params.id)
        .then(function(user){
            if(!user){
                res.status(404).send("The requested user does not exist");
                return false;
            }else{
                user.name = req.body.name || user.name,
                user.email = req.body.email || user.email
                user.save()
                .then(function(result){
                    res.status(200).send(result);
                })
                .catch(function(error){
                    res.status(500).send(error);
                })
            }
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },

    // DELETE
    deleteUserInfo: (req, res) => {
        const infoId = parseInt(req.params.infoId);
        
        if(!infoId || isNaN(infoId)){
            res.status(500).send('Missing information ID param');
            return false;
        }

        UsersInformation.findByPk(infoId)
        .then(function(userInfo){
            if(userInfo == undefined){
                res.status(500).send("The requested information record does not exist");
            }else{
                userInfo.destroy()
                .then(function(result){
                    res.status(200).send(result);
                })
                .catch(function(error){
                    res.status(500).send(error);
                })
            }
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },
    deleteUserInfoAll: async (req, res) => {
        const user = await UserController.getUserById(req.params.userId);
        
        if(!user){
            res.status(500).send("The user does not exist");
            return false;
        }

        let deletedinformation = [];

        UsersInformation.findAll({where: {id_user: user.id} })
        .then(function(infoRecords){
            const deleteRecords = infoRecords.map(function(infoRecord){
                return infoRecord.destroy()
                .then(function(result){
                    deletedinformation.push(result.dataValues);
                    return result;
                })
                .catch(function(error){
                    deletedinformation.push(error);
                    res.status(500).send(deletedinformation)
                })
            })

            Promise.all(deleteRecords)
            .then(function (deletedInformation) {
                res.status(200).send(deletedInformation);
            })
            .catch(function (error) {
                res.status(500).send(error);
            });
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },
    deleteUserStore: async (req, res) => {
        const user = await UserController.getUserById(req.body.user);
        const storeId = parseInt(req.params.storeId);
        
        if(!user){
            res.status(500).send("The user does not exist");
            return false;
        }

        UsersStores.destroy({where: {id_user: user.id, id_store: storeId}})
        .then(function(rows){
            res.status(200).send({rows});
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },
    deleteUserHistory: async (req, res) => {
        const user = await UserController.getUserById(req.params.userId);
        
        if(!user){
            res.status(500).send("The user does not exist");
            return false;
        }

        Orders.destroy({where: {id_user: user.id}})
        .then(function(rows){
            res.status(200).send({rows});
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },
    deleteUser: async (req, res) => {
        const user = await UserController.getUserById(req.params.userId);
        
        if(!user){
            res.status(500).send("The user does not exist");
            return false;
        }

        let destroyedData = [];

        // DELETE USER INFO
        const infoDelete = UsersInformation.destroy({where: {id_user: user.id}})
        .then(function(rows){destroyedData.push(`User information rows: ${rows}`);})
        .catch(function(error){destroyedData.push(error);res.status(500).send(deletedinformation)});

        // DELETE USER STORES
        const storesDelete = UsersStores.destroy({where: {id_user: user.id}})
        .then(function(rows){destroyedData.push(`User stores rows: ${rows}`);})
        .catch(function(error){destroyedData.push(error);res.status(500).send(deletedinformation)});

        // DELETE USER ORDERS
        const ordersDelete = Orders.destroy({where: {id_user: user.id}})
        .then(function(rows){destroyedData.push(`User history rows: ${rows}`);})
        .catch(function(error){destroyedData.push(error);res.status(500).send(deletedinformation)});

        // DELETE USER
        const userDelete = Users.destroy({where: {id: user.id}})
        .then(function(rows){destroyedData.push(`USER DELETED SUCCESSFULLY`);})
        .catch(function(error){destroyedData.push(error);res.status(500).send(deletedinformation)});

        Promise.all([infoDelete, storesDelete, ordersDelete, userDelete])
        .then(function () {
            res.status(200).send(destroyedData);
        })
        .catch(function (error) {
            res.status(500).send(error);
        });
    }
};

module.exports = UserController;