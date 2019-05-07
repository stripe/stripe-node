'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('BalanceTransactions Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.balanceTransactions.retrieve('txn_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history/txn_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.balanceTransactions.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history',
        headers: {},
        data: {},
      });
    });
  });
});
