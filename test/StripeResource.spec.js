'use strict';

var utils = require('../testUtils');

var nock = require('nock');

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('StripeResource', function() {
  describe('createResourcePathWithSymbols', function() {
    it('Generates a path', function() {
      stripe.invoices.create({});
      var path = stripe.invoices.createResourcePathWithSymbols('{id}');
      expect(path).to.equal('/invoices/{id}');
    });
  });

  describe('_defaultHeaders', function() {
    it('sets the Authorization header with Bearer auth using the global API key', function() {
      var headers = stripe.invoices._defaultHeaders(null, 0, null);
      expect(headers.Authorization).to.equal('Bearer fakeAuthToken');
    });
    it('sets the Authorization header with Bearer auth using the specified API key', function() {
      var headers = stripe.invoices._defaultHeaders('anotherFakeAuthToken', 0, null);
      expect(headers.Authorization).to.equal('Bearer anotherFakeAuthToken');
    });
    it('sets the Stripe-Version header if an API version is provided', function() {
      var headers = stripe.invoices._defaultHeaders(null, 0, '1970-01-01');
      expect(headers['Stripe-Version']).to.equal('1970-01-01');
    });
    it('does not the set the Stripe-Version header if no API version is provided', function() {
      var headers = stripe.invoices._defaultHeaders(null, 0, null);
      expect(headers).to.not.include.keys('Stripe-Version');
    });
  });

  describe('Retry Network Requests', function() {
    // use a real instance of stripe as we're mocking the http.request responses
    var realStripe = require('../lib/stripe')(utils.getUserStripeKey());
    var options = {
      host: stripe.getConstant('DEFAULT_HOST'),
      path: '/v1/charges',
      data: {
        amount: 1000,
        currency: 'usd',
        source: 'tok_visa',
        description: 'test'
      }
    };

    afterEach(function() {
      nock.cleanAll();
    });

    describe('_request', function() {
      // mock the 500
      nock('https://' + options.host)
        .post(options.path, options.data)
        .replyWithError({
          type: 'StripeConnectionError'
        });

      it('throws an error on connection failure', function(done) {
        realStripe.charges.create(options.data, function(err, charge) {
          expect(err.detail).to.deep.equal({
            type: 'StripeConnectionError'
          });

          done();
        });
      });
    });

    describe('_shouldRetry', function() {
      it('should return false if we\'ve reached maximum retries', function() {
        var res = stripe.invoices._shouldRetry({}, 0);

        expect(res).to.equal(false);
      });

      it('should return true if we have more retries available', function() {
        stripe.setMaxNetworkRetries(1);
        var res = stripe.invoices._shouldRetry({
          type: 'StripeConnectionError'
        }, 0);

        expect(res).to.equal(true);
      });

      it('should return false if the error is not an API or connection error', function() {
        stripe.setMaxNetworkRetries(1);
        var res = stripe.invoices._shouldRetry({
          type: 'foo'
        }, 0);

        expect(res).to.equal(false);
      });
    });
  });
});
