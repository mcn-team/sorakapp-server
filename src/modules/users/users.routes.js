const express = require('express');
const controllers = require('./users.controllers');
const validators = require('./users.validators');

const { authenticationCheck } = require('../../../middlewares/authentication-check');

const router = express.Router();

router.use(authenticationCheck);

router.route('/')
    .get(controllers.readManyUsers)
    .post(controllers.createOneUsers);

router.route('/:id')
    .get(validators.readOneUsers, controllers.readOneUsers);

module.exports = router;
