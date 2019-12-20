const express = require('express');
const controllers = require('./users.controllers');

const router = express.Router();

router.route('/register')
    .post(controllers.createOneUser)
;

module.exports = router;
