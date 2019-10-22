'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('CountrySpecs Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.countrySpecs.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/country_specs',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      const country = 'US';
      stripe.countrySpecs.retrieve(country);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/country_specs/${country}`,
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
});
