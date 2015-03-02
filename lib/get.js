'use strict';

var fs = require('fs');

module.exports = function (req, res, fileName, dirName) {
  var data;

  fs.readFile(__dirname + '/../data/' + dirName + '/' + fileName + '.json' , function (err, data) {
    if (err) throw err;
    var dataString = data.toString('utf-8');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write(dataString);
    res.end();
  });
};
