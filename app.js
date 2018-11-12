var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add middleware to the application
// require('./server/middleware/auth.js')(app);

// Add routes to the application
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/*', (req, res) =>
  res.status(200).send({
    message:
      'API hit > No valid route found. Check your request for typos, request type, & params.',
  })
);

const api = app;

module.exports = {
  api,
};
