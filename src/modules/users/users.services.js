const mongoose = require('mongoose');

const User = mongoose.model('User');

async function readOneUser(userId) {
    const query = { _id: mongoose.Types.ObjectId(userId) };

    return User.findOne(query, { password: false }).lean();
}

async function readOneUserByUsername(data) {
    return User.findOne({ username: data.username }).lean();
}

async function createOneUser(data) {
    const user = new User({ username: data.username, password: data.password, role: data.role });

    return user.save();
}

module.exports.readOneUser = readOneUser;
module.exports.readOneUserByUsername = readOneUserByUsername;
module.exports.createOneUser = createOneUser;
