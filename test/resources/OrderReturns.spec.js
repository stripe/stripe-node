'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('OrderReturn Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.orderReturns.retrieve('orderReturnIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns/orderReturnIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.orderReturns.list({
        limit: 3,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns',
        data: {
          limit: 3,
        },
        headers: {},
      });
    });

    it('Supports filtering by order', () => {
      stripe.orderReturns.list({
        order: 'orderIdFoo123',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns',
        data: {
          order: 'orderIdFoo123',
        },
        headers: {},
      });
    });
  });
});
