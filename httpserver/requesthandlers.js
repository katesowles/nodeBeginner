const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');

function start (response, postData) {
  console.log('request handler \'start\' was called.');

  let body = '<html>' +
      '<head>' +
        '<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />' +
      '</head>' +
      '<body>' +
        '<form action="/upload" method="post">' +
          '<textarea name="text" rows="20" cols="60"></textarea>' +
          '<input type="submit" value="submit text" />' +
          '</form>' +
      '</body>' +
    '</html>';

  exec('ls -lah', function (error, stdout, stderr) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(body);
    response.end();
  });
}

function upload (response, postData) {
  console.log('request handler \'upload\' was called.');
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('you\'ve sent the following text: ' +
  querystring.parse(postData).text);
  response.end();
}



exports.start = start;
exports.upload = upload;
