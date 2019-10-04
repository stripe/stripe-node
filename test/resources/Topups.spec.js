'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Topup Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.topups.retrieve('tu_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/topups/tu_123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.topups.create({
        source: 'src_123',
        amount: '1500',
        currency: 'usd',
        description: 'a topup',
        statement_descriptor: 'creating a topup',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/topups',
        data: {
          source: 'src_123',
          amount: '1500',
          currency: 'usd',
          description: 'a topup',
          statement_descriptor: 'creating a topup',
        },
        headers: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.topups.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/topups',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('cancel', () => {
    it('Sends the correct request', () => {
      stripe.topups.cancel('tu_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/topups/tu_123/cancel',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.topups.update('tu_123', {metadata: {key: 'value'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/topups/tu_123',
        headers: {},
        data: {metadata: {key: 'value'}},
        settings: {},
      });
    });
  });
});
