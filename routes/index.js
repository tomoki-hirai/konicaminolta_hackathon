var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('top', { title: 'Express' });
  // res.sendfile('./viewtop.ejs');
});

module.exports = router;
