var express =  require('express');
var personctrl = require('./person.controller');

const router = express.Router();

router.route('/')
    .get(personctrl.list);

router.route('/post')
    .post(personctrl.create);

router.route('/:username')
    .delete(personctrl.remove);



module.exports = router;