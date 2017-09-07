var https = require('http');
//console.log('I did it');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var callback = function (response) {
  console.log('In response handler callback');
  //console.log(response)
  response.on('data', function(chunk) {
    console.log('[--CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });

}


console.log("I'm about to make a request");
/*
https.request = function (options, cb) {
  return new ClientRequest(options, cb);
}
*/
https.request(options, callback).end();

console.log("I've made the request: \n")// https.request(options, callback));
