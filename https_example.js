var https = require('http');
//console.log('I did it');

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function (response) {
  console.log('In response handler callback');
  console.log("response: ", response);

}


console.log("I'm about to make a request");
https.request(options, callback).end();

console.log("I've made the request");
