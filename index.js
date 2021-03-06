require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
var app = express();
var apiProductRoute = require('./api/routes/product.route');
var transferRoute = require('./routes/transfer.route');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var carRoute = require('./routes/cart.route');
var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');
var port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(sessionMiddleware);
app.use(csurf({ cookie: true }));
//Get request to get data from root
app.get('/', function(req, res){
    res.render('index', {
        name: 'Dat'
    });
});
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', carRoute);
app.use('/transfer',authMiddleware.requireAuth, transferRoute);
app.use('/api/products', apiProductRoute);
app.listen(port, function(){
    console.log('Server listening on port ' + port);
});