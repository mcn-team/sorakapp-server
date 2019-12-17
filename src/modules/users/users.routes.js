const express = require('express');
const router = express.Router();
const controllers = require('./users.controllers');

router.route('/register')
    .post(controllers.createOneUser)
;

module.exports = router;
