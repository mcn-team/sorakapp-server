const services = require('./authentication.services');

//status
const HTTP_OK = 200;
const HTTP_BAD_REQUEST = 400;

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
            res.status(HTTP_BAD_REQUEST); //authentication failed
        }

    } catch (err) {
        throw err;
    }
}

module.exports.authenticate = authenticate;
