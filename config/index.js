const Joi = require('@hapi/joi');

const CONFIG = require('./config.json');

const MIN_DB_NAME_LENGTH = 4;
const MAX_DB_NAME_LENGTH = 24;
const MIN_PORT_NUMBER = 1025;
const MAX_PORT_NUMBER = 65534;
const MIN_SECRET_LENGTH = 16;
const MAX_SECRET_LENGTH = 128;

const configSchema = Joi.object({
    DB_URL: Joi
        .string()
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
        .required(),
    SECRET: Joi
        .string()
        .min(MIN_SECRET_LENGTH)
        .max(MAX_SECRET_LENGTH)
        .required(),
    REPLICA_SET: Joi.boolean().optional()
});

Joi.assert(CONFIG, configSchema);

exports.config = CONFIG;
