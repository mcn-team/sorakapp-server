const mongoose = require('mongoose');

const { config } = require('../config');

require('../src/modules/users/users.schema');

const connectionString = `${config.DB_URL}/${config.DB_NAME}${config.REPLICA_SET && '?replicaSet=rs'}`;

mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error(err));
