'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Transfers Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.transfers.retrieve('transferId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers/transferId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.transfers.create({
        amount: 200,
        currency: 'usd',
        recipient: {},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers',
        headers: {},
        data: {amount: 200, currency: 'usd', recipient: {}},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
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

  describe('cancel', () => {
    it('Sends the correct request', () => {
      stripe.transfers.cancel('transferId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId4/cancel',
        headers: {},
        data: {},
      });
    });
  });

  describe('reverse', () => {
    it('Sends the correct request', () => {
      stripe.transfers.reverse('transferId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId4/reversals',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.transfers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers',
        headers: {},
        data: {},
      });
    });
  });

  describe('listTransactions', () => {
    it('Sends the correct request', () => {
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
