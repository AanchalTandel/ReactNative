let express = require('express');
let personRouter = require('./Person/person.routes');

const router = express.Router();

router.use('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.use('/api/person', personRouter);

module.exports = router;