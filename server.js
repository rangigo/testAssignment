
var app = require('./app');
var OrdersController = require('./app/controllers/ordersController');


app.use('/orders', OrdersController);

var port = 8000;


var server = app.listen(port, function() {
  console.log('Server is listening on port ' + port);
});

module.exports = server;