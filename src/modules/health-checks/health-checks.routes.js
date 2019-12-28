const express = require('express');

const controllers = require('./health-checks.controllers');

const router = express.Router();

router.route('/')
    .get(controllers.getHealth);

router.route('/db')
    .get(controllers.getDatabaseHealth);

module.exports = router;
