'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var CHARGE_TEST_ID = 'chargeIdTest999';
var REFUND_TEST_ID = 'refundIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
var chargeRefund = new resources.ChargeRefunds(stripe, {
  chargeId: CHARGE_TEST_ID,
});

// Use spy from existing resource:
chargeRefund._request = stripe.customers._request;

describe('ChargeRefund Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      chargeRefund.retrieve(REFUND_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds/' + REFUND_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      chargeRefund.create({
        amount: 100,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds',
        data: {amount: 100},
        headers: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      chargeRefund.update(REFUND_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds/' + REFUND_TEST_ID,
        data: {metadata: {key: 'value'}},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      chargeRefund.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds',
        data: {},
        headers: {},
      });
    });
  });
});
