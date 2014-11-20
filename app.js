// Base Setup
// ====================================================================================================

// call the package we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use middleware bodyParser()
// let us get the data from a POST
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8888;

// base route for API
// ====================================================================================================

require('./routes/users.routes.js')(app);

// start the api server
// ====================================================================================================
app.listen(port);
console.log('server start on port ' + port);