const usersRoutes = require('../src/modules/users/users.routes');
const authenticationRoutes = require('../src/modules/authenticaton/authentication.routes');
const healthChecksRoutes = require('../src/modules/health-checks/health-checks.routes');

module.exports = exports = (app) => {
    app.use('/api/users', usersRoutes);
    app.use('/api', authenticationRoutes);
    app.use('/api/health-check', healthChecksRoutes);
};
