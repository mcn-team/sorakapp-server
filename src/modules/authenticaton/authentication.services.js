const userServices = require('../users/users.services');
const { jwtGenerate } = require('../../utils/jwtGenerator.utils');

async function authenticate(logs) {
    const user = await userServices.readOneUsersByUsername(logs.username);

    if (!user || user.password !== logs.password) {
        return null;
    }

    return jwtGenerate(user._id);
}

async function register(data) {
    const user = await userServices.createOneUsers(data);

    return jwtGenerate(user._id);
}

module.exports.authenticate = authenticate;
module.exports.register = register;
