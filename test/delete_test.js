'use strict';

require('../lib/app.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;
var numberOfFiles;
var newnumberOfFiles;

chai.use(chaihttp);

describe('the delete request' , function () {

  before (function () {
    var testData = '{"name":"bassnectar", "color":"black"}';
    fs.writeFile('./data/penguins/test.json', testData , function () {
      fs.readdir('./data/penguins/' , function(err, files) {
        numberOfFiles = files.length;
      });
    });
  });

  it('should remove a file' , function(done) {
    chai.request('localhost:3000')
    .delete('/penguins/test')
    .end(function (err, res) {
      fs.readdir('./data/penguins/' , function(err, files) {
        newnumberOfFiles = files.length;
        expect(numberOfFiles - 1).to.eql(newnumberOfFiles);
        done();
      });
    });
  });
});





