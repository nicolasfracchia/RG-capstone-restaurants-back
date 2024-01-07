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
            res.status(500).send('The user ID must be a number');
            return false;
        }
        
        const userData = { attributes: ['id', 'name', 'email'] };

        try {
            const results = await Users.findByPk(userId, userData);
            if (!results) {
                res.status(500).send('User not found'); // Returns error 500 if the user doesn't exist
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
                as: 'infoType',
                attributes: ['id', 'name']
            }]
        };

        try {
            const results = await UsersInformation.findAll(infoData);
            let information = results.map(i => ({
                'info_id': i['infoType.id'],
                'info_type': i.information,
                'info_value': i['infoType.name']
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
    
    
    newUserInfo: (req, res) => {
        return true;
    },

    // PATCH
    updateUserInfo: (req, res) => {
        return true;
    },
    updateUser: (req, res) => {
        return true;
    },

    // DELETE
    deleteUserInfoAll: (req, res) => {
        return true;
    },
    deleteUserInfo: (req, res) => {
        return true;
    },
    deleteUserStore: (req, res) => {
        return true;
    },
    deleteUser: (req, res) => {
        return true;
    }
};

module.exports = UserController;