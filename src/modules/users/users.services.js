const mongoose = require('mongoose');

const User = mongoose.model('User');

async function readManyUsers() {
    const projection = { password: false };

    return User.find({}, projection).lean();
}

async function createOneUser(data) {
    const user = new User({ username: data.username, password: data.password, role: data.role });
    const { password, ...newUser } = (await user.save()).toJSON();

    return newUser;
}

async function readOneUser(userId) {
    const query = { _id: mongoose.Types.ObjectId(userId) };
    const projection = { password: false };

    return User.findOne(query, projection).lean();
}

async function readOneUserByUsername(username) {
    return User.findOne({ username: username }).lean();
}

module.exports.readManyUsers = readManyUsers;
module.exports.createOneUser = createOneUser;
module.exports.readOneUser = readOneUser;
module.exports.readOneUserByUsername = readOneUserByUsername;
