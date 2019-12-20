const express = require('express');
const controllers = require('./authentication.controllers');

const router = express.Router();

router.route('/login')
    .post(controllers.authenticate)
;

module.exports = router;
