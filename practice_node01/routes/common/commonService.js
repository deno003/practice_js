const fetch = require('node-fetch');
const fs = require('fs');
const marked = require('marked');  
const url = 'https://api.github.com/users/';

/*
    GitHubのUser情報を取得する
    @pram userId
*/
module.exports.getGitHubUserInfo = async() => {

    try{
        const gitHubUserId = 'deno003';
        const response = await fetch(url + encodeURIComponent(gitHubUserId));
        const json = await response.json();
        console.log(json.origin);
        return json;
    }catch(error){
        console.error(error);
    }
}

/*
    特殊文字を置換する
    @param str
*/
module.exports.escapeSpecialChars = async(str) => {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/*
    ファイルを読み込む
    @param filepath
*/
module.exports.readFile = (filePath) => {
    // ファイル読み込み
    const mdFile = fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
        if(err){
          console.error(err);
          process.exit(1);
          return;
        }
        console.log(file);
        return file;
      });
}

/*
    mdをhtmlに変換する
    @param md
*/
module.exports.convertMdToHtml = async(md) => {
    return marked(md);
}