'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('OrderReturn Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.orderReturns.retrieve('orderReturnIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/order_returns/orderReturnIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
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

    it('Supports filtering by order', function() {
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
