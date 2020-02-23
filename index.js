var express = require('express');
var app = express();
var userRoute = require('./routes/user.route')
var port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
//Get request to get data from root
app.get('/', function(req, res){
    res.render('index', {
        name: 'Dat'
    });
});
app.use('/users', userRoute);
app.listen(port, function(){
    console.log('Server listening on port ' + port);
});