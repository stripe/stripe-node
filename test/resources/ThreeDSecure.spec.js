'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('ThreeDSecure Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.threeDSecure.retrieve('tdsrc_id');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/3d_secure/tdsrc_id',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.threeDSecure.create({
        card: 'tok_test',
        amount: 1500,
        currency: 'usd',
        return_url: 'https://example.org/3d-secure-result',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/3d_secure',
        headers: {},
        data: {
          card: 'tok_test',
          amount: 1500,
          currency: 'usd',
          return_url: 'https://example.org/3d-secure-result',
        },
      });
    });
  });
});
