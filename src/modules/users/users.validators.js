const Joi = require('@hapi/joi');

const { validatorsMiddleware } = require('../../../middlewares/validatorsMiddleware');

const ID_LENGTH = 24;

const readOneUsers = validatorsMiddleware(() => {
    return {
        params: Joi
            .object()
            .keys({ id: Joi
                .string()
                .hex()
                .length(ID_LENGTH)
                .required()
            })
            .required()
    };
});

module.exports.readOneUsers = readOneUsers;
