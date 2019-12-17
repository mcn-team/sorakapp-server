const userServices = require('../users/users.services');

async function authenticate(logs) {
    try {
        //get user to authenticate with its username
        const user = await userServices.readOneUserByUsername({ username: logs.username });

        //check if user exists
        if (user !== null) {
            //check password
            if (logs.password === user.password) {
                return 'fake_token6sdf5g4s65d4fgs4df4gs4dfg4d6f4gd4f65g'; //return a session token
            } else {
                return null; //wrong password
            }
        } else {
            return null; //wrong username
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.authenticate = authenticate;
