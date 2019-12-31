const Joi = require('@hapi/joi');

const { validatorsMiddleware } = require('../../../middlewares/validatorsMiddleware');
const userRoles = require('../../constants/roles.constants');

const USERNAME_MIN = 6;
const USERNAME_MAX = 12;
const PASSWORD_MIN = 8;
const PASSWORD_MAX = 12;

const usernameSchema = Joi
    .string()
    .alphanum()
    .min(USERNAME_MIN)
    .max(USERNAME_MAX);

const passwordSchema = Joi
    .string()
    .min(PASSWORD_MIN)
    .max(PASSWORD_MAX);

const rolesSchema = Joi
    .string()
    .valid(...userRoles.getValues);

const authenticate = validatorsMiddleware(() => {
    return {
        body: Joi
            .object()
            .keys({
                username: usernameSchema.required(),
                password: passwordSchema.required()
            })
            .required()
    };
});

const register = validatorsMiddleware(() => {
    return {
        body: Joi
            .object()
            .keys({
                username: usernameSchema.required(),
                password: passwordSchema.required(),
                role: rolesSchema.required()
            })
            .required()
    };
});

module.exports.authenticate = authenticate;
module.exports.register = register;
