var mongoose = require('mongoose'),
    Product = mongoose.model('Product');
exports.getProduct = function(req, res) {
  Product.findOne({ _id: req.query.productId })
  .exec(function(err, product) {
    if (!product){
      res.json(404, {msg: 'Photo Not Found.'});
    } else {
      res.json(product);
    }
  });
};
exports.getProducts = function(req, res) {
  //res.json({});
  //console.log(req);
//res.send({});
  Product.find()
  .exec(function(err, products) {
    console.log(err);
    if (!products){
      console.log('Not Found:');
      res.json(404, {msg: 'Products Not Found.'});
    } else {
      console.log('Found:'+products);
      res.json(products);
    }
  });
};
