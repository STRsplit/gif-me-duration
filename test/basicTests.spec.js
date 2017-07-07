const base64Img = require('base64-img');
const gifyParse = require('gify-parse');
const { base64Async, getDuration, attachDuration, coreFunction } = require('./testFunctions.js');
const chai = require("chai");
const { assert, expect } = chai;
chai.should();
const chaiAsPromised = require("chai-as-promised");

describe('Test each function individually', function() {
  this.timeout(15000);
  describe('Basic functions exist', function() {
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
  describe('base64Async: Should return promise - resolve to base64 encoding of image by url', function() {
    let gifURL = 'http://devcenter.wintellect.com/wp-content/uploads/2016/10/Spectron.gif';
    it('base64Async should return a promise', function (done) {
      expect(base64Async(gifURL)).to.eventually.be.fulfilled.notify(done);
    });
    it('base64Async of url should return a promise with a string result', function (done) {
      expect(base64Async(gifURL)).to.eventually.be.a('string').notify(done);
    });
  });
  describe('getDuration: Should return promise - resolve to duration of gif from url', function () {
    let gifURL = 'http://devcenter.wintellect.com/wp-content/uploads/2016/10/Spectron.gif';
    it('getDuration should return a promise', function (done) {
      getDuration(gifURL).should.be.fulfilled.notify(done)
    });   
    it('getDuration should eventually resolve to a number', function (done) {
      getDuration(gifURL).should.eventually.be.a('number').notify(done)

    });   
  });    
  describe('attachDuration: Should return promise - resolve to object w/ duration & url', function () {
    let gifURL = 'http://devcenter.wintellect.com/wp-content/uploads/2016/10/Spectron.gif';
    it('attachDuration should return a promise', function (done) {
      attachDuration(gifURL).should.be.fulfilled.notify(done)
    });   
    it('attachDuration should eventually resolve to an object', function (done) {
      attachDuration(gifURL).should.eventually.be.an('object').notify(done)
    });     
    it('attachDuration resolved object should have duration property', function (done) {
      attachDuration(gifURL).should.be.fulfilled.then(gifData => {
        expect(gifData).to.have.property('duration');
      }).should.notify(done)
    });    
    it('attachDuration resolved object should have url property', function (done) {
      attachDuration(gifURL).should.be.fulfilled.then(gifData => {
        expect(gifData).to.have.property('url')
      }).should.notify(done)
    });   
    it('attachDuration: duration for provided gifURL should be "7230"', function (done) {
      attachDuration(gifURL).should.be.fulfilled.then(gifData => {
        expect(gifData.duration).to.equal(7230)
      }).should.notify(done)
    });   
  });    
  describe('coreFunction: Should return array of promises - resolve to array of objects w/ url and duration for each', function () {
    let gifURL = 'http://devcenter.wintellect.com/wp-content/uploads/2016/10/Spectron.gif';
    it('coreFunction should handle single url input', function (done) {
      coreFunction(gifURL).should.be.fulfilled.notify(done)
    }); 
    it('coreFunction should handle array input data', function (done) {
      coreFunction([gifURL, gifURL]).should.be.fulfilled.notify(done)
    });   
    it('coreFunction should resolve to array of objects', function (done) {
      coreFunction([gifURL, gifURL]).should.be.fulfilled.then(results => {
        expect(results).to.have.lengthOf(2);
        expect(results[0]).to.be.an('object')
      }).should.notify(done)
    });  
    it('coreFunction resolved array objects should have url property', function (done) {
      coreFunction([gifURL, gifURL]).should.be.fulfilled.then(results => {
        expect(results[0]).to.have.property('url')
      }).should.notify(done)
    });  
    it('coreFunction resolved array objects should have duration property', function (done) {
      coreFunction([gifURL, gifURL]).should.be.fulfilled.then(results => {
        expect(results[0]).to.have.property('duration')
      }).should.notify(done)
    });   
  });    
});