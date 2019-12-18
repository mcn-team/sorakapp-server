exports.errorHTTPHandler = (status, message, errno) => {
    const error = new Error(message);

    error.statusCode = status;
    error.errno = errno;

    return error;
};
