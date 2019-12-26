exports.errorHTTPHandler = (...parameters) => {
    let status = null;
    let message = null;
    let errno = null;

    if (parameters.length === 1) {
        status = parameters[0].status;
        message = parameters[0].message;
        errno = parameters[0].errno;
    } else {
        status = parameters[0];
        message = parameters[1];
        errno = parameters[2];
    }

    const error = new Error(message);

    error.statusCode = status;
    error.errno = errno;

    return error;
};
