const mongoose = require('mongoose');

const { errorHTTPHandler } = require('../../utils/error-http-handler.utils');
const { HTTP_NOT_FOUND } = require('../../constants/http.constants');

const User = mongoose.model('User');

async function readOneUserByUsername(data) {
    try {
        return await User.findOne({ username: data.username });
    } catch (err) {
        throw errorHTTPHandler(HTTP_NOT_FOUND, 'User not found');
    }
}

async function createOneUser(data) {
    const user = new User({ username: data.username, password: data.password, role: data.role });

    return user.save();
}

module.exports.readOneUserByUsername = readOneUserByUsername;
module.exports.createOneUser = createOneUser;
