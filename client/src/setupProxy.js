const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use(proxy(['/api', '/api/decrypt_attempt'], { target: 'http://localhost:5000' }));
  app.use(proxy(['/auth', '/auth/google', '/auth/facebook', '/auth/local/login', '/auth/local/register'], { target: 'http://localhost:5000' }));
}