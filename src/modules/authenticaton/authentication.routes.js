const express = require('express');
const router = express.Router();
const controllers = require('./authentication.controllers');

router.route('/')
    .get(controllers.authenticate)
;

module.exports = router;
