var express = require('express');
var router = express.Router();
var _ = require('underscore');

var users = [
  {
    user_id: 1,
    user_name: 'shijn1'
  },{
    user_id: 2,
    user_name: 'shijn2'
  },{
    user_id: 3,
    user_name: 'shijn3'
  },{
    user_id: 4,
    user_name: 'shijn4'
  },{
    user_id: 5,
    user_name: 'shijn5'
  }
];

function findUserById(user_id){
  return _.find(users,function(user){
    return user.user_id == user_id;
  });
}

router.route('/users')
  .get(function(req,res){
    res.json(users);
  })
  .post(function(req,res){
    var user = {
      user_id: users.length+1,
      user_name: req.body.user_name
    };
    users.push(user);
    res.json({ message: 'user create!' });
  });

router.route('/users/:user_id')
  .get(function(req,res){
    res.json(findUserById(req.params.user_id));
  })
  .put(function(req,res){
    var user = findUserById(req.params.user_id);
    user.name = req.body.user_name;
    res.json({ message: 'user update!' });
  })
  .delete(function(req,res){
    var user = findUserById(req.params.user_id);
    users.splice(_.indexOf(users,user));
    res.json({ message: 'user delete'});
  });

module.exports = router;