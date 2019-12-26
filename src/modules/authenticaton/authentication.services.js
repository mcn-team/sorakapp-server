const userServices = require('../users/users.services');

async function authenticate(logs) {
    const user = await userServices.readOneUserByUsername({ username: logs.username });

    if (!user || user.password !== logs.password) {
        return null;
    }

    //todo: generate tokens using jwt
    return 'fake_token6sdf5g4s65d4fgs4df4gs4dfg4d6f4gd4f65g'; //return a session token
}

async function register(data) {
    await userServices.createOneUser({ username: data.username, password: data.password });

    //todo: generate tokens using jwt
    return 'fake_token6sdf5g4s65d4fgs4df4gs4dfg4d6f4gd4f65g'; //return a session token
}

module.exports.authenticate = authenticate;
module.exports.register = register;
