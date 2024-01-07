const {
    Users,
    UsersInformation,
    UsersStores,
    InformationType,
    Stores
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
    getUserById: async (req, res) => {
        const userId = parseInt(req.params.id);
        
        if (isNaN(userId)){
            res.status(500).send('The user ID must be a number');
            return false;
        }
        
        
        const userData = { attributes: ['id', 'name', 'email'] };

        try {
            const results = await Users.findByPk(userId, userData);

            if (!results) {
                res.status(500).send('User not found'); // Returns error 500 if the user doesn't exist
            } else {
                let user = {
                    'id': results.id,
                    'name': results.name,
                    'mail': results.email,
                };

                const parsedUrl = req.url.split('/');
                const requestedData = parsedUrl[0] || parsedUrl[1];

                switch (requestedData) {
                    case 'info':
                        user.information = await UserController.getUserInfo(userId);
                        break;
                    case 'stores':
                        user.stores = await UserController.getUserStores(userId);
                        break;
                    default:
                        user.information = await UserController.getUserInfo(userId);
                        user.stores = await UserController.getUserStores(userId);
                }

                res.status(200).send(user);
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
    getUserHistory: (req, res) => {
        console.log('ENTRA HISTORY');
    },
    getUserStores: async (userId) => {
        const storesData = {
            where: { id_user: userId },
            raw: true,
            attributes: [],
            include: [{
                model: Stores,
                as: 'store',
                attributes: ['id', 'name']
            }]
        };

        try {
            const results = await UsersStores.findAll(storesData);
            let stores = results.map(s => ({
                'store_id': s['store.id'],
                'store_name': s['store.name']
            }));
            return stores;
        } catch (error) {
            throw error; 
        }
    },

    // POST
    newUser: (req, res) => {
        return true;
    },
    newUserStore: (req, res) => {
        return true;
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