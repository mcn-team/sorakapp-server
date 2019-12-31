const express = require('express');

const controllers = require('./authentication.controllers');
const validators = require('./authentication.validators');

const router = express.Router();

router.route('/login')
    .post(validators.authenticate, controllers.authenticate);

router.route('/register')
    .post(validators.register, controllers.register);

module.exports = router;
