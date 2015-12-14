var express = require('express');
var router = express.Router();
var translator = require('../js/zombie-translator');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  //var intro = fs.pipe("../README.md")
  //res.send(intro)
  res.render('index', { title: 'Zombie Translator API' });
  //res.render(markdown({
  //  directory: '../README.md'
  //}));
});

/* GET zombie translation. */
router.get('/zombify/:zombieWords', function(req, res, next) {

  if(req.params.zombieWords.length > 1000){
    res.send({ "status": 414, "message": "zombie words are too long" });
  } else{
    var translated = translator.zombify(req.params.zombieWords);
    res.send({value: translated});
  }


});

/* GET english translation. */
router.get('/unzombify/:englishWords', function(req, res, next) {

  if(req.params.englishWords.length > 1000){
    res.send({ "status": 414, "message": "english words are too long" });
  } else{
    var translated = translator.unzombify(req.params.englishWords);
    res.send({value: translated});
  }

});

router.get('*', function(req, res){
  res.send({ "status": 404, "message": "route not found" });
})



module.exports = router;
