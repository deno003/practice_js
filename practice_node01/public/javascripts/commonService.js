const fetch = require('node-fetch');
const url = 'https://api.github.com/users/';

module.exports.getGitHubUserInfo = async() => {

    try{
        const gitHubUserId = 'etml003';
        const response = fetch(url + encodeURIComponent(gitHubUserId));
        const json = await response.json();
        console.log(json.origin);
        return json;
    }catch(error){
        console.error(error);
    }
}