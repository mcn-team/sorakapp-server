const services = require('./authentication.services');

//status
const HTTP_OK = 200;
const HTTP_UNAUTHORIZED = 401;

async function authenticate(req, res) {
    try {
        const logs = {
            username: req.body.username,
            password: req.body.password
        };

        //authenticate user
        const token = await services.authenticate(logs);

        if (token !== null) {
            res.status(HTTP_OK).send(token); //authentication success
        } else {
            res.status(HTTP_UNAUTHORIZED).send(); //authentication failed
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.authenticate = authenticate;
