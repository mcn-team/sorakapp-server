const services = require('./authentication.services');
const userServices = require('../users/users.services');

const { errorHTTPHandler } = require('../../utils/error-http-handler.utils');
const { WRONG_USER_PWD, ALREADY_EXISTING_USER } = require('../../utils/errno.utils');

async function authenticate(req, res) {
    const logs = {
        username: req.body.username,
        password: req.body.password
    };

    //authenticate user
    const token = await services.authenticate(logs);

    if (!token) {
        throw errorHTTPHandler(WRONG_USER_PWD);
    }

    res.send({ token }); //authentication success
}

async function register(req, res) {
    const data = req.body;
    const existingUser = await userServices.readOneUserByUsername(data.username);

    if (existingUser) {
        throw errorHTTPHandler(ALREADY_EXISTING_USER);
    }

    const token = await services.register(data);

    res.send({ token }); //authentication success
}

module.exports.authenticate = authenticate;
module.exports.register = register;
