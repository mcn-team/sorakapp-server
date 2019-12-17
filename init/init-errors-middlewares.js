module.exports = exports = (app) => {
    //error handling
    app.use((err, req, res, next) => {
        console.error(err);
        next();
    });
};
