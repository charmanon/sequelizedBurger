module.exports = function(app){
  // Our model controllers (rather than routes)
  var burgers_controller = require('./controllers/burgers_controller');

  app.use('/', burgers_controller);
//other routes..
}