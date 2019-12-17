const express = require('express');

const { config } = require('./config');
const DEFAULT_PORT = 5000;

//init server
const app = express();

//connect db
require('./init/init-database');

//Init standard middlewares
require('./init/init-middlewares')(app);

//Init errors middlewares
require('./init/init-errors-middlewares')(app);

//launch http listening
app.listen(config.PORT || DEFAULT_PORT, () => {
    console.log(`Server running on port ${config.PORT || DEFAULT_PORT}`);
});
