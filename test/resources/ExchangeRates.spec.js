'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('ExchangeRates Resource', function() {
  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.exchangeRates.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/exchange_rates',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      var currency = 'USD';
      stripe.exchangeRates.retrieve(currency);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/exchange_rates/' + currency,
        data: {},
        headers: {},
      });
    });
  });
});
