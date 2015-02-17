'use strict';

var fs = require('fs');

module.exports = function (req, res, fileName, dirName) {
  fs.unlink(__dirname + '/../data/'+ dirName + '/' + fileName +'.json' , function (err) {
    if (err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write(fileName + ' has been deleted');
    res.end();
  });
};
