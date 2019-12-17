const bodyParser = require('body-parser');

module.exports = exports = (app) => {
    //config headers
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    //parse request body
    app.use(bodyParser.json());
};
