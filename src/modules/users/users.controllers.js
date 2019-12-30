const services = require('./users.services');

const { errorHTTPHandler } = require('../../utils/error-http-handler.utils');
const { HTTP_CREATED, HTTP_INTERNAL_SERVER_ERROR } = require('../../constants/http.constants');
const { ALREADY_EXISTING_USER, USER_NOT_EXIST } = require('../../utils/errno.utils');

async function readManyUsers(req, res) {
    const users = await services.readManyUsers();

    res.send(users);
}

async function createOneUsers(req, res) {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    };

    const existingUser = await services.readOneUsersByUsername(newUser.username);

    if (existingUser) {
        throw errorHTTPHandler(ALREADY_EXISTING_USER);
    }

    const user = await services.createOneUsers(newUser);

    if (!user) {
        throw errorHTTPHandler(HTTP_INTERNAL_SERVER_ERROR, 'user create error');
    }

    res.status(HTTP_CREATED).send(user);
}

async function readOneUsers(req, res) {
    const userId = req.params.id;

    const user = await services.readOneUsers(userId);

    if (!user) {
        throw errorHTTPHandler(USER_NOT_EXIST);
    }

    res.send(user);
}

module.exports.readManyUsers = readManyUsers;
module.exports.createOneUsers = createOneUsers;
module.exports.readOneUsers = readOneUsers;
