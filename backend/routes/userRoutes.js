const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userControllers');

userRoutes.post('/', userController.createUser)
userRoutes.get('/', userController.fetchAll)
userRoutes.get('/:id', userController.fetchUser)


module.exports = userRoutes