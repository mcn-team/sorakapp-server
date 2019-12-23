const { HTTP_UNAUTHORIZED } = require('../constants/http.constants');

module.exports.WRONG_USER_PWD = { status: HTTP_UNAUTHORIZED, errno: '0001' };
