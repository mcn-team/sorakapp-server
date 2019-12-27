const mongoose = require('mongoose');

const User = mongoose.model('User');

async function readOneUserByUsername(data) {
    return User.findOne({ username: data.username });
}

async function createOneUser(data) {
    const user = new User({ username: data.username, password: data.password, role: data.role });

    return user.save();
}

module.exports.readOneUserByUsername = readOneUserByUsername;
module.exports.createOneUser = createOneUser;
