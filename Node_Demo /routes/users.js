var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    myAwesomeDB.collection('Users').find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        var tempData = _.find(result, { 'name': 'Jaimini' });
        if(tempData === undefined){
            collection.insert({  name: 'Jaimini', mob_no: '6578904321' });
        }
        console.log("====================================");
    });

    res.send('respond with a resource');
});

module.exports = router;
