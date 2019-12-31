const Joi = require('@hapi/joi');

const { HTTP_BAD_REQUEST } = require('../src/constants/http.constants');

exports.validatorsMiddleware = (callback) => {
    return (req, res, next) => {
        const schema = callback();

        const completeSchema = Joi
            .object()
            .keys({
                params: {},
                body: {},
                query: {},
                ...schema
            })
            .required();

        const inputs = {
            params: req.params,
            body: req.body,
            query: req.query
        };

        try {
            Joi.assert(inputs, completeSchema);
            next();
        } catch (err) {
            err.statusCode = HTTP_BAD_REQUEST;
            next(err);
        }
    };
};
