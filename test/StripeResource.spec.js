'use strict';

require('./testUtils');

var stripe = require('./testUtils').getSpyableStripe();
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
});
