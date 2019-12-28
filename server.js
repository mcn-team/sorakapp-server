const express = require('express');

require('express-async-errors');
const database = require('./init/init-database');

const { config } = require('./config');

const DEFAULT_PORT = 5000;

//init server
const app = express();

//connect db
require('./init/init-database');

//Init standard middlewares
require('./init/init-middlewares')(app);

//Init routes
require('./init/init-routes')(app);

//Init errors middlewares
require('./init/init-errors-middlewares')(app);

//launch http listening
app.listen(config.PORT || DEFAULT_PORT, () => {
    config.TEST_ENV || console.log(`Server running on port ${config.PORT || DEFAULT_PORT}`);
});

module.exports = app;
