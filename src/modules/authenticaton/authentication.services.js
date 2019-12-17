const mongoose = require('mongoose');
const User = mongoose.model('User');

async function authenticate(logs) {
    try {
        //get user to authenticate with its username
        const user = await User.findOne({username: logs.username});

        //check is user exists
        if (user !== null) {
            //check password
            if (logs.password === user.password) {
                return 'fake_token'; //return a session token
            } else {
                return null; //wrong password
            }
        } else {
            return null; //wrong username
        }
    } catch (err) {
        throw err;
    }
}

module.exports.authenticate = authenticate;
