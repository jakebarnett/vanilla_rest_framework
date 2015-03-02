'use strict';

require('../lib/app.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;

chai.use(chaihttp);

describe('the put request', function () {

  before (function (done) {
    var testData = '{"name":"bassnectar", "color":"black"}';
    fs.writeFile('./data/penguins/test.json', testData , function () {
      done();
    });
  });

  it('should overwrite an existing file or create a new one' , function (done) {
    chai.request('localhost:3000')
    .put('/penguins/test')
    .send({name : "deadmau5"})
    .end( function (err, res) {
      expect(res.text).to.eql('{"name":"deadmau5"}');
      done();
    });
  });

  after ( function (done) {
    fs.unlink("./data/penguins/test.json");
    done();
  });

});
