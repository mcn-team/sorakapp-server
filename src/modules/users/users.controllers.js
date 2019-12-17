const services = require('./users.services');

const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;

async function createOneUser(req, res) {
    try {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        };

        const user = await services.createOneUser(newUser);

        if (user !== null) {
            res.status(HTTP_CREATED).send(user);
        } else {
            res.status(HTTP_BAD_REQUEST).send();
        }
    } catch (err) {
        console.error(err);
        res.status(HTTP_BAD_REQUEST).send();
    }
}

module.exports.createOneUser = createOneUser;
