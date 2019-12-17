exports.logError = function logError(err, req, res, next) {
    console.error('*********************');
    console.error('ERROR >>');
    console.error(err);
    console.error('*********************');

    next(err);
};
