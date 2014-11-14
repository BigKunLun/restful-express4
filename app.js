// Base Setup
// ====================================================================================================

// call the package we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('underscore');

// configure app to use middleware bodyParser()
// let us get the data from a POST
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8888;

// base route for API
// ====================================================================================================
var router = express.Router();

// middleware to use for all request
router.use(function(req,res,next){
  console.log('Some Request is happening.');
  next();
});

// base api route with "http://localhost:8888/api"
router.get('/',function(req,res){
  res.json({ message: 'welcome to nodejs API' });
});

// the route demo with user resource
// ====================================================================================================
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

// more routes API can be here

// register API route that all of routes will be prefixed with '/api'
app.use('/api',router);

// start the api server
// ====================================================================================================
app.listen(port);
console.log('server start on port ' + port);