'use strict';

require('../lib/app.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;

var numberOfFiles;
var newNumberOfFiles;

describe('the post request' , function () {

  before (function () {
    fs.readdir('./data/penguins' , function (err, files) {
      numberOfFiles = files.length;
    });
  });

  it('should create a new file' , function (done) {
    chai.request('localhost:3000')
    .post('/penguins')
    .send({name : "deadmau5"})
    .end(function (err, res) {
      fs.readdir('./data/penguins' , function (err, files) {
        newNumberOfFiles = files.length;
        expect(newNumberOfFiles).to.eql(numberOfFiles + 1);
        done();
      });
    });
  });

 after ( function (done) {
    fs.unlink("./data/penguins/1.json");
    done();
  });

});
