import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
// import authMiddleware from './server/middleware/auth';
import routes from './server/routes';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add middleware to the application
// authMiddleware(app);

// Add routes to the application
routes(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/*', (req, res) =>
  res.status(200).send({
    message:
      'API hit > No valid route found. Check your request for typos, request type, & params.',
  })
);

export default app;
