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
        settings: {},
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
        url: '/v1/order_returns?limit=3',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Supports filtering by order', () => {
      stripe.orderReturns.list({
        order: 'orderIdFoo123',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns?order=orderIdFoo123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
