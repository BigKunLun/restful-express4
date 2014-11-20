'use strict';

/**
 * Module dependencies.
 */

module.exports = function(app) {
  // User Routes
  var users = require('../controllers/users.controller');
  app.route('/users')
    .get(users.list)
  //.post(users.create);
  // app.route('/users/:userId')
  //   .get(users.read)
  //   .put(users.update)
  //   .delete(users.delete);
  // app.param('userId', users.userByID);
};