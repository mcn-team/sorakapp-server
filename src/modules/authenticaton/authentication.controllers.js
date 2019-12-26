const services = require('./authentication.services');

const { errorHTTPHandler } = require('../../utils/error-http-handler.utils');

const { HTTP_UNAUTHORIZED, HTTP_INTERNAL_SERVER_ERROR } = require('../../constants/http.constants');

async function authenticate(req, res) {
    try {
        const logs = {
            username: req.body.username,
            password: req.body.password
        };
        const token = await services.authenticate(logs);

    if (!token) {
        throw errorHTTPHandler(HTTP_UNAUTHORIZED, 'login error');
    }
}

async function register(req, res) {
    try {
        const data = req.body;
        const token = await services.register(data);

        res.send({ token: token }); //authentication success
    } catch (err) {
        throw errorHTTPHandler(HTTP_INTERNAL_SERVER_ERROR, 'register error');
    }
}

module.exports.authenticate = authenticate;
module.exports.register = register;
