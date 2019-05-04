'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('TaxRates Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.taxRates.retrieve('txr_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      var data = {
        metadata: {a: '1234'},
      };
      stripe.taxRates.update('txr_123', data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data,
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
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
        data,
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
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
