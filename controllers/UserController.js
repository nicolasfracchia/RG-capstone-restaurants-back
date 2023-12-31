const { Users, UsersInformation, UsersStores } = require('../models');


const UserController = {
    // GET
    getAllUsers: (req, res) => {
        console.log('USERS MODEL:',Users);
        Users.findAll()
        .then(function(results){
            res.status(200).send(results);
        })
        .catch(function(error){
            res.status(500).send(error);
        })
    },
    getUserInfo: (req, res) => {
        console.log('ENTRA INFO');
    },
    getUserHistory: (req, res) => {
        console.log('ENTRA HISTORY');
    },
    getUserStores: (req, res) => {
        console.log('ENTRA STORES');
    },
    getUserById: (req, res) => {
        console.log('ENTRA BY ID');
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