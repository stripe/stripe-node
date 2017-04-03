'use strict';

require('./testUtils');

var stripe = require('./testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('StripeResource', function() {
  describe('createResourcePathWithSymbols', function() {
    it('Generates a path', function() {
      var invoice = stripe.invoices.create({});
      var path = stripe.invoices.createResourcePathWithSymbols('{id}');
      expect(path).to.equal('/invoices/{id}');
    });
  });
});
