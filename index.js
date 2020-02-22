var express = require('express');
var app = express();
var port = 3000;
//Get request to root
app.get('/', function(request, response){
    response.send('<h1>Hello World</h1>')
});
//Get request to /users
app.get('/users', function(request, response){
    response.send('User list')
});
app.listen(port, function(){
    console.log('Server listening on port ' + port);
});