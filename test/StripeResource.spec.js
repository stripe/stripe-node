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

  describe('_request', function() {
    it('throws an error on connection failure', function() {
      var stripe = require('../lib/stripe')(utils.getUserStripeKey());

      var options = {
        method: 'POST',
        host: stripe.getConstant('DEFAULT_HOST'),
        path: '/v1/charges',
        data: {
          amount: 1000,
          currency: 'usd',
          source: 'tok_visa',
          description: 'test'
        }
      };

      nock('https://' + options.host)
        .get(options.path)
        .reply(500, {
          error: 'foo errors'
        });

      stripe.charges.create(options.data, function(err, charge) {
        expect(err.message).to.equal('An error occurred with our connection to Stripe');
      });
    });
  });
});
