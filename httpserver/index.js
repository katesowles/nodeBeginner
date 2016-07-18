// to run : node index.js
// then open browser and navigate to localhost:8888

const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requesthandlers');

let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);
