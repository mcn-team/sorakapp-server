const express = require('express');

const { HTTP_NOT_FOUND } = require('../constants/http.constants');

require('express-async-errors');

function createExpressTestApp(router, { user, endpoint }) {
    const app = express();

    app.use(express.json());
    //Init standard middlewares
    require('../../init/init-middlewares')(app);
    //Init errors middlewares
    require('../../init/init-errors-middlewares')(app);

    if (user)
        app.use((req, res, next) => {
            req.user = user;
            req.user.type = user.constructor.modelName;
            next();
        });

    app.use(endpoint || '/api', router);

    // 404 - Not found
    app.all('*', (req, res) => {
        res.sendStatus(HTTP_NOT_FOUND);
    });

    return app;
}

module.exports.createExpressTestApp = createExpressTestApp;
