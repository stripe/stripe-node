'use strict';

const resources = require('../../lib/stripe').resources;
const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const TRANSFER_TEST_ID = 'transferIdTest999';
const REVERSAL_TEST_ID = 'reversalIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
const transferReversal = new resources.TransferReversals(stripe, {
  transferId: TRANSFER_TEST_ID,
});

// Use spy from existing resource:
transferReversal._request = stripe.customers._request;

describe('TransferReversal Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      transferReversal.retrieve(REVERSAL_TEST_ID);
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
      transferReversal.create({
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
      transferReversal.update(REVERSAL_TEST_ID, {
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
      transferReversal.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/transfers/${TRANSFER_TEST_ID}/reversals`,
        data: {},
        headers: {},
      });
    });
  });
});
