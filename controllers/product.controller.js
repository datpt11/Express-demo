var db = require('../db');
module.exports.index = function(req, res){
    var page = parseInt(req.query.page) || 1;// n page order 
    var perPage = 8; // x item in per page
    var start = (page - 1) * perPage; // (n - 1) * x;
    var end = page * perPage // (n - 1) * x + x = n * x
    res.render('products/index', {
        products: db.get('products').value().slice(start, end)
        // C2: Lodash  (.drop and .take)
    }); 
    // var page = parseInt(req.query.page) || 1;
    // var limit = req.query.limit
    // var start = (page - 1) * limit; // (n - 1) * x;
    // var end = page * limit;
    // res.render('products/index', {
    //         products: db.get('products').value().slice(start, end)
    //         // C2: Lodash  (.drop and .take)
    // });
};