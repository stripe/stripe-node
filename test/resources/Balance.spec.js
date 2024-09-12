'use strict';

const stripe = require('../testUtils.js').getSpyableStripe();
const expect = require('chai').expect;

describe('Balance Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.balance.retrieve();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: null,
        headers: {},
        settings: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.balance.retrieve('aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: null,
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11',
        headers: {},
        settings: {},
      });
    });
  });
});
