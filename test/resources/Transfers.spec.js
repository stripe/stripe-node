'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Transfers Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.transfers.retrieve('transferId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers/transferId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.transfers.create({
        amount: 200, currency: 'usd', recipient: {},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers',
        headers: {},
        data: {amount: 200, currency: 'usd', recipient: {}},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.transfers.update('transferId6654', {
        amount: 300,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId6654',
        headers: {},
        data: {amount: 300},
      });
    });
  });

  describe('cancel', function() {
    it('Sends the correct request', function() {
      stripe.transfers.cancel('transferId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId4/cancel',
        headers: {},
        data: {},
      });
    });
  });

  describe('reverse', function() {
    it('Sends the correct request', function() {
      stripe.transfers.reverse('transferId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId4/reversals',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.transfers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers',
        headers: {},
        data: {},
      });
    });
  });

  describe('listTransactions', function() {
    it('Sends the correct request', function() {
      stripe.transfers.listTransactions('tr_14222');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers/tr_14222/transactions',
        headers: {},
        data: {},
      });
    });
  });
});
