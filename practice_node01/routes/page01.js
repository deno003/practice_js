const express = require('express');
const router = express.Router();
const commonService = require('./common/commonService');

/* GET home page. */
router.get('/', async function(req, res, next) {

  try{  
    const gitHubUserInfo = await commonService.getGitHubUserInfo();
    const result = JSON.stringify(gitHubUserInfo);

    res.render('page01', { 
      title: 'Page01',
      result: result });

  }catch(error){  
    console.error(error);
  }
});

module.exports = router;
