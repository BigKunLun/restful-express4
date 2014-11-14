// Base Setup
// ====================================================================================================

// call the package we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// get the modules routes
var users = require('./modules/users');
var gifts = require('./modules/gifts');

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

// register API route that all of routes will be prefixed with '/api'
app.use('/api',users);
app.use('/api',gifts);

// start the api server
// ====================================================================================================
app.listen(port);
console.log('server start on port ' + port);