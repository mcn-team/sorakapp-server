const services = require('./authentication.services');

const { errorHTTPHandler } = require('../../utils/error-http-handler.utils');

const { HTTP_UNAUTHORIZED } = require('../../constants/http.constants');

async function authenticate(req, res) {
    const logs = {
        username: req.body.username,
        password: req.body.password
    };

    //authenticate user
    const token = await services.authenticate(logs);

    if (!token) {
        throw errorHTTPHandler(HTTP_UNAUTHORIZED, 'login error');
    }

    res.send({ result: token }); //authentication success
}

module.exports.authenticate = authenticate;
