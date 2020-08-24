var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    link:{href:'/page01', text:'page01',
          href2:'/page02', text2:'page02'}});
});

module.exports = router;
