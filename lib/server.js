'use strict';

var fs = require('fs');
var http = require('http');
var router = require('./router.js');

module.exports = {
  addResource: function (name) {
    fs.mkdir('../data/' + name , function () {});
  },
  start: function (location) {
    http.createServer(function (req,res) {
      router(req, res);
    })
    .listen(location, function () {
      console.log('server listening');
    });
  }
};
