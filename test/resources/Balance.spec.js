'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Balance Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.balance.retrieve('balanceIdFoo');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/balanceIdFoo',
        data: {}
      });

    });

  });

  describe('listTransactions', function() {

    it('Sends the correct request', function() {

      stripe.balance.listTransactions();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history',
        data: {}
      });

    });

  });

  describe('retrieveTransaction', function() {

    it('Sends the correct request', function() {

      stripe.balance.retrieveTransaction('transactionIdFoo');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history/transactionIdFoo',
        data: {}
      });

    });

  });

});