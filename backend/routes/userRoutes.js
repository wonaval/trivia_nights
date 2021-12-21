const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userControllers');

userRoutes.post('/',userController.createUser)


module.exports = userRoutes