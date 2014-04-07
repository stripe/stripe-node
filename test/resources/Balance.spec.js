'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Balance Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.balance.retrieve();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {}
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      stripe.balance.retrieve('aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11'
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

    it('Sends the correct request [with specified auth]', function() {

      stripe.balance.listTransactions('aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history',
        data: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11'
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

    it('Sends the correct request [with specified auth]', function() {

      stripe.balance.retrieveTransaction('transactionIdFoo', 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance/history/transactionIdFoo',
        data: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11'
      });

    });

  });

});