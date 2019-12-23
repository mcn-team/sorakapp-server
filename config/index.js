const Joi = require('@hapi/joi');

const CONFIG = require('./config.json');

const MIN_DB_NAME_LENGTH = 4;
const MAX_DB_NAME_LENGTH = 24;
const MIN_PORT_NUMBER = 1025;
const MAX_PORT_NUMBER = 65534;

const configSchema = Joi.object({
    DB_URL: Joi
        .string()
        .uri({ scheme: [ 'mongodb' ] })
        .required(),
    DB_NAME: Joi
        .string()
        .min(MIN_DB_NAME_LENGTH)
        .max(MAX_DB_NAME_LENGTH)
        .regex(/^[a-zA-Z]+$/)
        .required(),
    PORT: Joi
        .number()
        .min(MIN_PORT_NUMBER)
        .max(MAX_PORT_NUMBER)
        .required()
});

Joi.assert(CONFIG, configSchema);

exports.config = CONFIG;
