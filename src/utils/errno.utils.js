const { HTTP_UNAUTHORIZED, HTTP_CONFLICT } = require('../constants/http.constants');

module.exports.WRONG_USER_PWD = { status: HTTP_UNAUTHORIZED, errno: '0001', message: 'login error' };
module.exports.ALREADY_EXISTING_USER = { status: HTTP_CONFLICT, errno: '0002', message: 'registration error' };
module.exports.UNAUTHORIZED_ACCESS = { status: HTTP_UNAUTHORIZED, errno: '0003', message: 'invalid token' };
