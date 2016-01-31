var Fetch = require('whatwg-fetch');
var baseURL = 'http://localhost:6069';

var service = {
   get: function (url) {
      // console.log('making request');
      return fetch(baseURL + url)
         .then(function(response) {
            return response.json();
         });
   }
}

module.exports = service;
