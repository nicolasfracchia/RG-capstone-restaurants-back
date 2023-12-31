const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// GET
router.get('/', UserController.getAllUsers);
router.get('/info/:id', UserController.getUserInfo);
router.get('/history/:id', UserController.getUserHistory);
router.get('/stores/:id', UserController.getUserStores);
router.get('/:id', UserController.getUserById);

// POST
router.post('/', UserController.newUser);
router.post('/info', UserController.newUserStore);
router.post('/store', UserController.newUserInfo);

// PATCH
router.patch('/info/:id', UserController.updateUserInfo);
router.patch('/:id', UserController.updateUser);

// DELETE
router.delete('/info/all/:id', UserController.deleteUserInfoAll);
router.delete('/info/:id', UserController.deleteUserInfo);
router.delete('/store/:id', UserController.deleteUserStore);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
