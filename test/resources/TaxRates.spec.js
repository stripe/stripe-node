'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('TaxRates Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.taxRates.retrieve('txr_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      var data = {
        metadata: {a: '1234'},
      };
      stripe.taxRates.update('txr_123', data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data: data,
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      var data = {
        display_name: 'name',
        inclusive: false,
        percentage: 10.15,
      };
      stripe.taxRates.create(data);

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tax_rates',
        headers: {},
        data: data,
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.taxRates.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_rates',
        headers: {},
        data: {},
      });
    });
  });
});
