const express = require('express');

const controllers = require('./authentication.controllers');

const router = express.Router();

router.route('/login')
    .post(controllers.authenticate);

router.route('/register')
    .post(controllers.register);

module.exports = router;
