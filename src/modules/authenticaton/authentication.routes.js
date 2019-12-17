const express = require('express');
const router = express.Router();
const controllers = require('./authentication.controllers');

router.route('/login')
    .post(controllers.authenticate)
;

module.exports = router;
