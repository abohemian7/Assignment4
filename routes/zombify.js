var express = require('express');
var router = express.Router();

/* GET zombie translation. */
router.get('/zombify', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET english translation. */
router.get('/unzombify', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
