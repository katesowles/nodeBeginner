// to run : node server.js
// then open browser and navigate to localhost:8888

const http = require('http');
const url = require('url');
const router = require('./router');
const requestHandlers = require('./requesthandlers');

function start (handle) {
  http.createServer(function(request, response) {
    // allows us to distinguish requests based on the URL path requested
    var pathname = url.parse(request.url).pathname;
    console.log(`request for ${pathname} received.`);

    router.route(handle, pathname);

    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write('hello world');
    response.end();
  }).listen(8888);
  console.log('server has started');
}

exports.start = start;


// works the same as :
//
// const http = require('http');
//
// function onRequest(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/plain"});  // this tells the browser that the HTTP status is 200 (ok) and that the content coming through is text
//   response.write('hello world');  // writes this text to the body of the page upon load
//   response.end();  // once that's done, it ends the connection
// }
// http.createServer(onRequest).listen(8888);
