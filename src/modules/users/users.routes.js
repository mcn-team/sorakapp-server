const express = require('express');
const controllers = require('./users.controllers');

const { authenticationCheck } = require('../../../middlewares/authentication-check');

const router = express.Router();

router.use(authenticationCheck);

router.route('/')
    .post(controllers.createOneUser);

module.exports = router;
