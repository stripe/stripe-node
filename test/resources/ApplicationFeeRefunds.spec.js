'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const APPFEE_TEST_ID = 'appFeeIdTest999';
const REFUND_TEST_ID = 'refundIdTest999';

describe('ApplicationFeeRefund Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.applicationFeeRefunds.retrieve(APPFEE_TEST_ID, REFUND_TEST_ID);
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
      stripe.applicationFeeRefunds.update(APPFEE_TEST_ID, REFUND_TEST_ID, {
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
      stripe.applicationFeeRefunds.list(APPFEE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/application_fees/${APPFEE_TEST_ID}/refunds`,
        data: {},
        headers: {},
      });
    });
  });
});
