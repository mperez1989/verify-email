const { getAll, create, getOne, remove, update, login, getLoggedUser, verifyCode } = require('../controllers/user.controllers');
const verifyJWT= require('../utils/verifyJWT')
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT,getAll)
    .post(create);

userRouter.route('/login')
    .post(login);

userRouter.route('/me')
    .get(verifyJWT,getLoggedUser)

userRouter.route('/verify/:code')
    .get(verifyCode)

userRouter.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = userRouter;