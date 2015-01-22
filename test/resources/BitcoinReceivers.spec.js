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
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.bitcoinReceivers.create({
        amount: 200, currency: 'usd', description: 'some details'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/bitcoin/receivers',
        data: { amount: 200, currency: 'usd', description: 'some details' }
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.bitcoinReceivers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers',
        data: {}
      });

    });

  });

  describe('listTransactions', function() {

    it('Sends the correct request', function() {

      stripe.bitcoinReceivers.listTransactions('receiverId', {
        limit: 1
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers/receiverId/transactions',
        data: {
          limit: 1
        }
      })

    });

  });
});
