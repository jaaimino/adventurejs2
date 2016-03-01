/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {
  // Insert routes below
  app.use('/api/lobby', require('./api/lobby'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(function(req, res){
    res.status(404).end('error');
  });

  // All other routes should redirect to the index.html
  app.route('/*')
  .get(function(req, res) {
    res.sendfile(__dirname + '/client/index.html');
  });
};