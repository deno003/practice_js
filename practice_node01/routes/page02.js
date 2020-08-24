const express = require('express');
const router = express.Router();
const commonService = require('./common/commonService');
const commander = require('commander');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    // filePathの生成
    const filePath = path.join(__dirname, "sample01.md");
    // ファイル読み込み
    const mdFile = await commonService.readFile(filePath);
    // mdをhtmlに変換
    const result = marked(mdFile);

    res.render('page01', { 
      title: 'Page01',
      result: result });

  }catch(error){  
    console.error(error);
  }
});

module.exports = router;
