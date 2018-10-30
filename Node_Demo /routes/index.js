var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testIndex',function(req, res, next){
  res.send('Test Index Get Method')
});

module.exports = router;
