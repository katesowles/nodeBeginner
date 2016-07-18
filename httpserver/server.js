const http = require('http');
const url = require('url');

function start (route, handle) {
  http.createServer(function(request, response) {
    // allows us to distinguish requests based on the URL path requested
    let pathname = url.parse(request.url).pathname;
    console.log(`request for ${pathname} received.`);
    route(handle, pathname, response, request);
  }).listen(8888);
  console.log('server has started');
}

exports.start = start;
