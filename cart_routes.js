var express = require('express');
module.exports = function(app) {


  var path = require('path');

  var customers = require(path.join(__dirname, './controllers/customers_controller'));
  var products = require(path.join(__dirname, './controllers/products_controller'));
  var orders = require(path.join(__dirname, './controllers/orders_controller'));



  app.use('/static', express.static( './static')).
      use('/images', express.static( '../images'));
 

  app.get('/', function(req, res){
    res.render('shopping');
  });

  app.get('/products/get', products.getProducts);
  app.get('/orders/get', orders.getOrders);
  app.post('/orders/add', orders.addOrder);
  app.get('/customers/get', customers.getCustomer);
  app.post('/customers/update/shipping', customers.updateShipping);
  app.post('/customers/update/billing', customers.updateBilling);
  app.post('/customers/update/cart', customers.updateCart);
}
