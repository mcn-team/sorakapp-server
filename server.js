const express = require('express');

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

const router = express.Router();
router.route('/').get(() => {
    throw errorHTTPHandler(HTTP_UNPROCESSABLE_ENTITY, 'Test throw error', '000012321');
});

app.use('/api/health-check', router);

//Init errors middlewares
require('./init/init-errors-middlewares')(app);

//launch http listening
app.listen(config.PORT || DEFAULT_PORT, () => {
    console.log(`Server running on port ${config.PORT || DEFAULT_PORT}`);
});
