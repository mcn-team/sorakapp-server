const usersRoutes = require('../src/modules/users/users.routes');
const authenticationRoutes = require('../src/modules/authenticaton/authentication.routes');

module.exports = exports = (app) => {
    app.use('/api/users', usersRoutes);
    app.use('/api', authenticationRoutes);
};
