var express = require('express');
var validate = require('../validate/user.validate');
var router = express.Router();
var authMiddleware = require('../middlewares/auth.middleware');
var controller = require('../controllers/user.controller');
var multer = require('multer');
var upload = multer({ dest: './public/uploads/'});
router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 12345);
    res.send('hello');
});
//Get request to get data from users
router.get('/', controller.index);
router.get('/search', controller.search);
// Get request
router.get('/create', controller.create);
router.get('/:id', controller.get);
// post request
router.post('/create',upload.single('avatar'), validate.postCreate, controller.postCreate);
module.exports = router;