const admin = require('firebase-admin');
const bearerToken = require('express-bearer-token');

// Json filename shouldn't change each time it's generated (if it does, update this)
const serviceAccount = require('../../config/firebase-admin.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = app => {
  app.use(bearerToken()); // Parse out the Bearer Token
  app.use(function(req, res, next) {
    if (req.originalUrl === '/users/create') {
      console.log('Creating user.');
      next();
    } else if (req.method !== 'OPTIONS') {
      admin
        .auth()
        .verifyIdToken(req.token)
        .then(decodedToken => {
          req.uid = decodedToken.uid;
          console.log('Validated user id: ' + req.uid);
          // Continue with Request
          next();
        })
        .catch(err => {
          // log error
          console.log(err + ' invalid token.');

          // Respond with 401
          res.status(401).send({
            error: 'Invalid Token',
            message: 'This API requires authentication.',
          });
        });
    }
  });
};
