'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const TRANSFER_TEST_ID = 'transferIdTest999';
const REVERSAL_TEST_ID = 'reversalIdTest999';

describe('TransferReversal Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.transferReversals.retrieve(TRANSFER_TEST_ID, REVERSAL_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/transfers/${TRANSFER_TEST_ID}/reversals/${REVERSAL_TEST_ID}`,
        data: {},
        headers: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.transferReversals.create(TRANSFER_TEST_ID, {
        amount: 100,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/transfers/${TRANSFER_TEST_ID}/reversals`,
        data: {amount: 100},
        headers: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.transferReversals.update(TRANSFER_TEST_ID, REVERSAL_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/transfers/${TRANSFER_TEST_ID}/reversals/${REVERSAL_TEST_ID}`,
        data: {metadata: {key: 'value'}},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.transferReversals.list(TRANSFER_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/transfers/${TRANSFER_TEST_ID}/reversals`,
        data: {},
        headers: {},
      });
    });
  });
});
