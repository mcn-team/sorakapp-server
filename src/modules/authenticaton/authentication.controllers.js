const services = require('./authentication.services');

const { errorHTTPHandler } = require('../../utils/error-http-handler.utils');

const { HTTP_INTERNAL_SERVER_ERROR } = require('../../constants/http.constants');
const { WRONG_USER_PWD } = require('../../utils/errno.utils');

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

    res.send({ result: token }); //authentication success
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
