const { HTTP_INTERNAL_SERVER_ERROR, HTTP_BAD_REQUEST } = require('../../src/constants/http.constants');

/**
 * This error middleware compiles an error object to send to client
 *
 * @param {Error} err - Error object
 * @param {object<request>} req - ExpressJS request
 * @param {object<response>} res - ExpressJS response
 * @param {function} next - ExpressJS callback for next middleware
 */
// eslint-disable-next-line no-unused-vars
exports.clientHTTPError = function clientHTTPError(err, req, res, next) {
    const statusCode = err.statusCode || HTTP_INTERNAL_SERVER_ERROR;
    let payload = null;

    if (err.isJoi === true) {
        payload = {
            message: err.name,
            details: err.details,
            statusCode: HTTP_BAD_REQUEST,
            ...(err.errno && { errno: err.errno })
        };
    } else {
        payload = {
            message: err.message,
            statusCode,
            ...(err.errno && { errno: err.errno })
        };
    }

    res.status(statusCode).send(payload);
};
