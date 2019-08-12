const routes = require('next-routes')();

routes.add('homePage', '/', 'home');
routes.add('userPage', '/users/:id', 'user');

module.exports = routes;
