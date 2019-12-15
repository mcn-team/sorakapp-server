const env = process.env.NODE_ENV || 'local';
const config = require(`../config/config.${env}.json`);

exports.config = config;
