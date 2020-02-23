var express = require('express');
var router = express.Router();
var shortid = require('shortid');
var db = require('../db');
//Get request to get data from users
router.get('/', function(req, res){
    res.render('users/index', {
        users: db.get('users').value()
    });
});
router.get('/search', function(req, res){
    var q = req.query.q; // req.query is object & q is key
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
});
// Get request
router.get('/create', function(req, res){
    res.render('users/create');
});
router.get('/:id', function(req, res){
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    });
});
// post request
router.post('/create', function(req, res){
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write(); // res.body đọc dữ liệu từ client gửi lên và chuyển sang object rồi lưu vào req.body
    res.redirect('');// điều hướng sau khi create sang trang users
});
module.exports = router;