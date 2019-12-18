const express = require('express');
require('express-async-errors');

const { errorHTTPHandler } = require('./src/utils');
const { HTTP_UNPROCESSABLE_ENTITY } = require('./src/constants/http.constants');
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
    console.log(`Server running on port ${config.PORT || DEFAULT_PORT}`);
});
