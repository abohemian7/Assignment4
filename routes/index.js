var express = require('express');
var router = express.Router();
var translator = require('../js/zombie-translator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET zombie translation. */
router.get('/zombify', function(req, res, next) {
  res.send('respond with a zombify');
});

/* GET english translation. */
router.get('/unzombify', function(req, res, next) {
  var test = translator.zombify('hello');
  console.log(test);
  res.send('respond with a unzombify :: ' + test);
});

module.exports = router;
