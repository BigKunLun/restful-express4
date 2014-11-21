'use strict';

/**
 * Module dependencies.
 */
var userModel = require('../models/user.model.js');

/**
 * List of users
 */
exports.list = function(req, res) {
  userModel.find(function(err, users) {
    if (err) {
      return res.status(400).send({
        message: 'something error'
      });
    } else {
      res.json(users);
    }
  });
};