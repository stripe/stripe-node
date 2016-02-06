'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('CountrySpecs Resource', function() {
  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.countrySpecs.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/country_specs',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      var country = 'US';
      stripe.countrySpecs.retrieve(country);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/country_specs/' + country,
        data: {},
        headers: {},
      });
    });
  });
});
