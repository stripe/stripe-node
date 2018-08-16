'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('BitcoinReceivers Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.bitcoinReceivers.retrieve('receiverId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers/receiverId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.bitcoinReceivers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers',
        headers: {},
        data: {},
      });
    });
  });

  describe('listTransactions', function() {
    it('Sends the correct request', function() {
      stripe.bitcoinReceivers.listTransactions('receiverId', {
        limit: 1,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers/receiverId/transactions',
        headers: {},
        data: {
          limit: 1,
        },
      })
    });
  });
});
