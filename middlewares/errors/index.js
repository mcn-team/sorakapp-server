const { logError } = require('./log-error');
const { clientHTTPError } = require('./client-http-error');

module.exports.logError = logError;
module.exports.clientHTTPError = clientHTTPError;
