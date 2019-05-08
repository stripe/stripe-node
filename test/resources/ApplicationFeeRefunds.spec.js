'use strict';

const resources = require('../../lib/stripe').resources;
const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const APPFEE_TEST_ID = 'appFeeIdTest999';
const REFUND_TEST_ID = 'refundIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
const appFeeRefund = new resources.ApplicationFeeRefunds(stripe, {
  feeId: APPFEE_TEST_ID,
});

// Use spy from existing resource:
appFeeRefund._request = stripe.customers._request;

describe('ApplicationFeeRefund Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      appFeeRefund.retrieve(REFUND_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/application_fees/${APPFEE_TEST_ID}/refunds/${REFUND_TEST_ID}`,
        data: {},
        headers: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      appFeeRefund.update(REFUND_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/application_fees/${APPFEE_TEST_ID}/refunds/${REFUND_TEST_ID}`,
        data: {metadata: {key: 'value'}},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      appFeeRefund.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/application_fees/${APPFEE_TEST_ID}/refunds`,
        data: {},
        headers: {},
      });
    });
  });
});
