var express = require('express');
var router = express.Router();
const cors = require('cors');

router.options('*', cors());

// Importing all routes to keep app.js cleane

router.use('/users', require('./users'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
