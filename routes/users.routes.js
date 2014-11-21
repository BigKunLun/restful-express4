'use strict';

/**
 * Module dependencies.
 */
var usersController = require('../controllers/users.controller');

module.exports = function(app) {
  // User Routes
  app.route('/api/users')
    .get(usersController.list)
  //.post(users.create);
  // app.route('/api/users/:userId')
  //   .get(users.read)
  //   .put(users.update)
  //   .delete(users.delete);
};