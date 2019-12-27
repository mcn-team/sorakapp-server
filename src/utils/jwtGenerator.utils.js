const jwt = require('jsonwebtoken');

const { SECRET } = require('../../config/config');

const jwtGenerate = (userId) => {
    return jwt.sign({ userId: userId }, SECRET, { expiresIn: '24h' });
};

module.exports.jwtGenerate = jwtGenerate;
