

const stripe = require('../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('BitcoinReceivers Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.bitcoinReceivers.retrieve('receiverId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers/receiverId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.bitcoinReceivers.create({
        amount: 200,
        currency: 'usd',
        description: 'some details',
        email: 'do+fill_now@stripe.com',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/bitcoin/receivers',
        headers: {},
        data: {
          amount: 200,
          currency: 'usd',
          description: 'some details',
          email: 'do+fill_now@stripe.com',
        },
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.bitcoinReceivers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request to the top-level API', () => {
      stripe.bitcoinReceivers.update(
        'btcrcv_123',
        { metadata: { key: 'value' } },
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/bitcoin/receivers/btcrcv_123',
        data: { metadata: { key: 'value' } },
        headers: {},
      });
    });
  });

  describe('listTransactions', () => {
    it('Sends the correct request', () => {
      stripe.bitcoinReceivers.listTransactions('receiverId', {
        limit: 1,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/bitcoin/receivers/receiverId/transactions',
        headers: {},
        data: {
          limit: 1,
        },
      });
    });
  });
});
