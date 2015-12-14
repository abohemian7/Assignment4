var express = require('express');
var router = express.Router();
var translator = require('../js/zombie-translator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zombie Translator API' });
});

/* GET zombie translation. */
router.get('/zombify/:zombieWords', function(req, res, next) {

  if(req.params.zombieWords.length >= 1000){
    res.sendStatus(414);
  } else{
    var test = translator.zombify(req.params.zombieWords);
    console.log(test);
    res.send('respond with a zombify :: ' + test);
  }


});

/* GET english translation. */
router.get('/unzombify/:englishWords', function(req, res, next) {

  if(req.params.englishWords.length >= 1000){
    res.sendStatus(414);
  } else{
    var test = translator.unzombify(req.params.englishWords);
    console.log(test);
    res.send('respond with a unzombify :: ' + test);
  }

});

router.get('*', function(req, res){
  res.sendStatus(404);
})



module.exports = router;
