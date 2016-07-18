// to run : node server.js
// then open browser and navigate to localhost:8888

const http = require('http');
const url = require('url');
// const route = require('./router').route;
// const requestHandlers = require('./requesthandlers');

function start (route, handle) {
  http.createServer(function(request, response) {
    // allows us to distinguish requests based on the URL path requested
    let postData = '';
    let pathname = url.parse(request.url).pathname;
    console.log(`request for ${pathname} received.`);

    request.setEncoding('utf8');

    request.addListener('data', function (postDataChunk) {
      postData += postDataChunk;
      console.log('recieved POST data chunk "' + postDataChunk + '"');
    });

    request.addListener('end', function() {
      route(handle, pathname, response, postData);
    });

  }).listen(8888);
  console.log('server has started');
}

exports.start = start;
