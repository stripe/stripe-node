'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Topup Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.topups.retrieve('tu_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/topups/tu_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.topups.create({
        source: 'src_123',
        amount: '1500',
        currency: 'usd',
        description: 'a topup',
        statement_descriptor: 'creating a topup',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/topups',
        data: {
          source: 'src_123',
          amount: '1500',
          currency: 'usd',
          description: 'a topup',
          statement_descriptor: 'creating a topup',
        },
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.topups.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/topups',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.topups.update('tu_123', {metadata: {'key': 'value'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/topups/tu_123',
        headers: {},
        data: {metadata: {'key': 'value'}},
      });
    });
  });
});
