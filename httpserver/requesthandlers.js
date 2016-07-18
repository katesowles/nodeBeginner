function start () {
  console.log(`request handler 'start' was called.`);

  // let body = '<html>' + '<head>' + '<meta http-equiv="Content-Type" content = "text/html; charset=UTF-8" />' + '</head>' + '<body>' +
}

function upload() {
  console.log(`request handler 'upload' was called.`);
}

exports.start = start;
exports.upload = upload;
