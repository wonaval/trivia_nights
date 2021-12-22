const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userControllers');

userRoutes.post('/', userController.createUser)
userRoutes.get('/users', userController.fetchAll)
userRoutes.get('/users/:id', userController.fetchUser)


module.exports = userRoutes