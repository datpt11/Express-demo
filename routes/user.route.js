var express = require('express');
var validate = require('../validate/user.validate');
var router = express.Router();
var controller = require('../controllers/user.controller');
//Get request to get data from users
router.get('/', controller.index);
router.get('/search', controller.search);
// Get request
router.get('/create', controller.create);
router.get('/:id', controller.get);
// post request
router.post('/create', validate.postCreate, controller.postCreate);
module.exports = router;