const jwt = require('jsonwebtoken');

const { errorHTTPHandler } = require('../src/utils/error-http-handler.utils');
const { readOneUser } = require('../src/modules/users/users.services');

const { UNAUTHORIZED_ACCESS } = require('../src/utils/errno.utils');
const { SECRET } = require('../config/config');

exports.authenticationCheck = (req, res, next) => {
    const token = req.headers['authorization'];

    jwt.verify(token, SECRET, async (err, decoded) => {
        if (err) {
            next(errorHTTPHandler(UNAUTHORIZED_ACCESS));
        } else {
            const userId = decoded.userId;

            const user = await readOneUser(userId);

            if (!user) {
                next(errorHTTPHandler(UNAUTHORIZED_ACCESS));
            } else {
                req.user = user;
                console.log(user);
                next();
            }
        }
    });
};
