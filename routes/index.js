var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/password', function(req, res, next) {
  res.render('password.html');
});

module.exports = router;
