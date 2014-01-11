'use strict';

var testUtils = require('./testUtils');
var chai = require('chai');
var when = require('when');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey(),
  'latest'
);

var expect = chai.expect;

var CUSTOMER_DETAILS = {
  description: 'Some customer',
  card: {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: 2015
  }
};

describe('Stripe Module', function() {

  var cleanup = new testUtils.CleanupUtility();
  this.timeout(20000);

  describe('ClientUserAgent', function() {
    it('Should return a user-agent serialized JSON object', function() {
      var d = when.defer();
      stripe.getClientUserAgent(function(c) {
        d.resolve(JSON.parse(c));
      });
      return expect(d.promise).to.eventually.have.property('lang', 'node');
    });
  });

  describe('setTimeout', function() {
    it('Should define a default equal to the node default', function() {
      expect(stripe.getApiField('timeout')).to.equal(require('http').createServer().timeout);
    });
    it('Should allow me to set a custom timeout', function() {
      stripe.setTimeout(900);
      expect(stripe.getApiField('timeout')).to.equal(900);
    });
    it('Should allow me to set null, to reset to the default', function() {
      stripe.setTimeout(null);
      expect(stripe.getApiField('timeout')).to.equal(require('http').createServer().timeout);
    });
  });

  describe('Callback support', function() {

    describe('Any given endpoint', function() {

      it('Will call a callback if successful', function(done) {

        var defer = when.defer();

        stripe.customers.create({
          description: 'Some customer',
          card: {
            number: '4242424242424242',
            exp_month: 12,
            exp_year: 2015
          }
        }, function(err, customer) {
          cleanup.deleteCustomer(customer.id);
          defer.resolve('Called!');
        });

        return expect(defer.promise).to.eventually.become('Called!');
      });

      it('Given an error the callback will receive it', function() {

        var defer = when.defer();

        stripe.customers.createCard('nonExistentCustId', { card: {} }, function(err, customer) {
          if (err) {
            defer.resolve('ErrorWasPassed');
          } else {
            defer.reject('NoErrorPassed');
          }
        });

        return expect(defer.promise).to.eventually.become('ErrorWasPassed')
      });

    });
  });

});
