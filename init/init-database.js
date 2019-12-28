const mongoose = require('mongoose');

const { config } = require('../config');

// Requires all application schema
require('../src/modules/users/users.schema');

const DB_NAME = `${config.DB_NAME}${config.TEST_ENV && '_test'}`;
const connectionString = `${config.DB_URL}/${DB_NAME}${config.REPLICA_SET && '?replicaSet=rs'}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => config.TEST_ENV || console.log('Database connected successfully'))
    .catch(err => console.error(err));
