const services = require('./health-checks.services');

async function getHealth(req, res) {
    res.send({ isAlive: true });
}

async function getDatabaseHealth(req, res) {
    const response = await services.getDatabaseHealth();

    res.send(response);
}

module.exports.getHealth = getHealth;
module.exports.getDatabaseHealth = getDatabaseHealth;
