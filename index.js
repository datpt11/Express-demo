var express = require('express');
var app = express();
var port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');
//Get request to get data from root
app.get('/', function(req, res){
    res.render('index', {
        name: 'Dat'
    });
});
//Get request to get data from users
app.get('/users', function(req, res){
    res.render('users/index', {
        users: [
            { id: 1, name: 'Dat' },
            { id: 2, name: 'Huong' }
        ]
    });
});
app.listen(port, function(){
    console.log('Server listening on port ' + port);
});