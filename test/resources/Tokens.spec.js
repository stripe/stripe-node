'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Tokens Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.tokens.create({
        card: {number: 123},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tokens',
        headers: {},
        data: {card: {number: 123}},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.tokens.retrieve('tokenId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tokens/tokenId1',
        headers: {},
        data: {},
      });
    });
  });
});
