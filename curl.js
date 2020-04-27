const request = require('request');

function curl(done, url){

    request(url, (err, res, body) => {
    if(err){
      done(err);
    }else{
        done(body);
    }
  })
}

module.exports = curl;
