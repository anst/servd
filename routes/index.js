var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/waiter', function(req, res, next) {
  res.render('waiters', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.render('customer', { title: 'Express' });
});

module.exports = router;
