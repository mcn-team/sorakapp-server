const {
    logError,
    clientHTTPError
} = require('../middlewares/errors');

module.exports = exports = (app) => {
    app.use(logError);
    app.use(clientHTTPError);
};
