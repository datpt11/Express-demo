var Product = require('../../models/product.model');
module.exports.index = function(req, res){
    Product.find().then(function(products){
        res.json(products);
    });
};