'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var PAYOUT_TEST_ID = 'po_testid1';

describe('Payouts Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.payouts.retrieve(PAYOUT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payouts/' + PAYOUT_TEST_ID,
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.payouts.create({
        amount: 200, currency: 'usd',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payouts',
        headers: {},
        data: {amount: 200, currency: 'usd'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.payouts.update(PAYOUT_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payouts/' + PAYOUT_TEST_ID,
        headers: {},
        data: {metadata: {key: 'value'}},
      });
    });
  });

  describe('cancel', function() {
    it('Sends the correct request', function() {
      stripe.payouts.cancel(PAYOUT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payouts/' + PAYOUT_TEST_ID + '/cancel',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.payouts.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payouts',
        headers: {},
        data: {},
      });
    });
  });

  describe('listTransactions', function() {
    it('Sends the correct request', function() {
      stripe.payouts.listTransactions(PAYOUT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payouts/' + PAYOUT_TEST_ID + '/transactions',
        headers: {},
        data: {},
      });
    });
  });
});
