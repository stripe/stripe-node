'use strict';

var testUtils = require('./testUtils');
var Promise = require('bluebird');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey(),
  'latest'
);

var expect = require('chai').expect;

var exp_year = new Date().getFullYear() + 1;

var CUSTOMER_DETAILS = {
  description: 'Some customer',
  card: {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: exp_year,
  },
};

describe('Stripe Module', function() {
  var cleanup = new testUtils.CleanupUtility();
  this.timeout(20000);

  describe('GetClientUserAgent', function() {
    it('Should return a user-agent serialized JSON object', function() {
      return expect(new Promise(function(resolve, reject) {
        stripe.getClientUserAgent(function(c) {
          resolve(JSON.parse(c));
        });
      })).to.eventually.have.property('lang', 'node');
    });
  });

  describe('GetClientUserAgentSeeded', function() {
    it('Should return a user-agent serialized JSON object', function() {
      var userAgent = {lang: 'node'};
      var d = Promise.defer();
      stripe.getClientUserAgentSeeded(userAgent, function(c) {
        d.resolve(JSON.parse(c));
      });
      return expect(d.promise).to.eventually.have.property('lang', 'node');
    });

    it('Should URI-encode user-agent fields', function() {
      var userAgent = {lang: 'ï'};
      var d = Promise.defer();
      stripe.getClientUserAgentSeeded(userAgent, function(c) {
        d.resolve(JSON.parse(c));
      });
      return expect(d.promise).to.eventually.have.property('lang', '%C3%AF');
    })
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

  describe('setAppInfo', function() {
    describe('when given nothing or an empty object', function() {
      it('should unset stripe._appInfo', function() {
        stripe.setAppInfo();
        expect(stripe._appInfo).to.be.undefined;
      });
    });

    describe('when given an object with no `name`', function() {
      it('should throw an error', function() {
        expect(function() {
          stripe.setAppInfo({});
        }).to.throw(/AppInfo.name is required/);

        expect(function() {
          stripe.setAppInfo({
            version: '1.2.3',
          });
        }).to.throw(/AppInfo.name is required/);

        expect(function() {
          stripe.setAppInfo({
            cats: '42',
          });
        }).to.throw(/AppInfo.name is required/);
      });
    });

    describe('when given at least a `name`', function() {
      it('should set name, version and url of stripe._appInfo', function() {
        stripe.setAppInfo({
          name: 'MyAwesomeApp',
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
        });

        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });

        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });
      });

      it('should ignore any invalid properties', function() {
        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
          countOfRadishes: 512,
        });
        expect(stripe._appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
        });
      });
    });

    it('should be included in the ClientUserAgent and be added to the UserAgent String', function(done) {
      var appInfo = {
        name: Math.random().toString(36).slice(2),
        version: '1.2.345',
        url: 'https://myawesomeapp.info',
      };

      stripe.setAppInfo(appInfo);

      stripe.getClientUserAgent(function(uaString) {
        expect(JSON.parse(uaString).application).to.eql(appInfo);

        expect(stripe.getAppInfoAsString()).to.eql(appInfo.name + '/' + appInfo.version + ' (' + appInfo.url + ')');

        done();
      });
    });
  });

  describe('Callback support', function() {
    describe('Any given endpoint', function() {
      it('Will call a callback if successful', function() {
        return expect(new Promise(function(resolve, reject) {
          stripe.customers.create({
            description: 'Some customer',
            card: {
              number: '4242424242424242',
              exp_month: 12,
              exp_year: exp_year,
            },
          }, function(err, customer) {
            cleanup.deleteCustomer(customer.id);
            resolve('Called!');
          });
        })).to.eventually.equal('Called!');
      });

      it('Will expose HTTP response object', function() {
        return expect(new Promise(function(resolve, reject) {
          stripe.customers.create({
            description: 'Some customer',
            card: {
              number: '4242424242424242',
              exp_month: 12,
              exp_year: exp_year,
            },
          }, function(err, customer) {
            cleanup.deleteCustomer(customer.id);

            var headers = customer.lastResponse.headers;
            expect(headers).to.contain.keys('request-id');

            expect(customer.lastResponse.requestId).to.match(/^req_/);
            expect(customer.lastResponse.statusCode).to.equal(200);

            resolve('Called!');
          });
        })).to.eventually.equal('Called!');
      });

      it('Given an error the callback will receive it', function() {
        return expect(new Promise(function(resolve, reject) {
          stripe.customers.createCard('nonExistentCustId', {card: {}}, function(err, customer) {
            if (err) {
              resolve('ErrorWasPassed');
            } else {
              reject('NoErrorPassed');
            }
          });
        })).to.eventually.become('ErrorWasPassed');
      });
    });
  });
});
