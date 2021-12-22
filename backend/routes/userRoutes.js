const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userControllers');

userRoutes.post('/', userController.createUser)
userRoutes.get('/', userController.fetchAll)
<<<<<<< HEAD
userRoutes.get('/:id', userController.fetchUser)
=======
// userRoutes.get('/users/:id', userController.fetchUser)
>>>>>>> main


module.exports = userRoutes