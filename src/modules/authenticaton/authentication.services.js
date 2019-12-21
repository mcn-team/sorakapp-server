const userServices = require('../users/users.services');

async function authenticate(logs) {
    try {
        const user = await userServices.readOneUserByUsername({ username: logs.username });

        if (!user || user.password !== logs.password) {
            return null;
        }

        return 'fake_token6sdf5g4s65d4fgs4df4gs4dfg4d6f4gd4f65g'; //return a session token
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.authenticate = authenticate;
