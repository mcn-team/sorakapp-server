const mongoose = require('mongoose');
const User = mongoose.model('User');

async function readOneUserByUsername(data) {
    try {
        return await User.findOne({ username: data.username });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function createOneUser(data) {
    try {
        const user = new User({ username: data.username, password: data.password, role: data.role });
        return await user.save();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.readOneUserByUsername = readOneUserByUsername;
module.exports.createOneUser = createOneUser;
