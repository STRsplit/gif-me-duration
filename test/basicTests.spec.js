const base64Img = require('base64-img');
const gifyParse = require('gify-parse');
const { base64Async, getDuration, attachDuration, coreFunction } = require('./testFunctions.js');
const chai = require("chai");
const { assert, expect } = chai;
chai.should();
const chaiAsPromised = require("chai-as-promised");

describe('Test each function individually', function() {
  this.timeout(15000);
  describe('Imported functions exist', function() {
    it('base64Async should be a function', function () {
      expect(base64Async).to.be.a('function')
    });
    it('getDuration should be a function', function () {
      expect(getDuration).to.be.a('function')
    });
    it('attachDuration should be a function', function () {
      expect(attachDuration).to.be.a('function')
    });    
    it('coreFunction should be a function', function () {
      expect(coreFunction).to.be.a('function')
    });
  });
  chai.use(chaiAsPromised);
  describe('base64Async tests', function() {
    let gifURL = 'http://devcenter.wintellect.com/wp-content/uploads/2016/10/Spectron.gif';
    it('base64Async should return a promise', function (done) {
      expect(base64Async(gifURL)).to.eventually.be.fulfilled.notify(done);
    });
    it('base64Async of url should return a promise with a string result', function (done) {
      expect(base64Async(gifURL)).to.eventually.be.a('string').notify(done);
    });
  });
  describe('getDuration tests', async function () {
    let gifURL = 'http://devcenter.wintellect.com/wp-content/uploads/2016/10/Spectron.gif';
    it('getDuration should return a promise', function (done) {
      base64Async(gifURL).should.be.fulfilled.then(data => {
        getDuration(data).should.be.fulfilled;
      }).should.notify(done)
    });   
  });    
});