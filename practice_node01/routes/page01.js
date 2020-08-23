const express = require('express');
const router = express.Router();
const commonService = require('../public/javascripts/commonService');

/* GET home page. */
router.get('/', function(req, res, next) {

let result = 'result';
const gitHubUserInfo = await commonService.getGitHubUserInfo();

  res.render('page01', { 
    title: 'Page01',
    result: gitHubUserInfo });
});

module.exports = router;
