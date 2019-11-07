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
        settings: {},
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
        settings: {},
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
        settings: {},
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
        settings: {},
      });
    });
  });
});
