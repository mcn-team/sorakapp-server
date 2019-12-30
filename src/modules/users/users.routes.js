const express = require('express');
const controllers = require('./users.controllers');

const { authenticationCheck } = require('../../../middlewares/authentication-check');

const router = express.Router();

router.use(authenticationCheck);

router.route('/')
    .get(controllers.readManyUsers)
    .post(controllers.createOneUser);

router.route('/:id')
    .get(controllers.readOneUser);

module.exports = router;
