const express = require('express');
const routerUser = express.Router();
const UserCtrl = require('../controllers/user');

routerUser.post('/signup',UserCtrl.signup);
routerUser.post('/login',UserCtrl.login);

module.exports = routerUser;