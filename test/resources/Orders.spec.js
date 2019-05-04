'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Order Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.orders.retrieve('orderIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders/orderIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.orders.create({
        currency: 'usd',
        items: [
          {
            type: 'sku',
            parent: 'skuIdFoo123',
          },
        ],
        shipping: {
          name: 'Jane Rosen',
          address: {
            line1: 'foo',
          },
        },
        email: 'jane@ros.en',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders',
        data: {
          currency: 'usd',
          items: [
            {
              type: 'sku',
              parent: 'skuIdFoo123',
            },
          ],
          shipping: {
            name: 'Jane Rosen',
            address: {
              line1: 'foo',
            },
          },
          email: 'jane@ros.en',
        },
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.orders.list({
        limit: 3,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders',
        data: {
          limit: 3,
        },
        headers: {},
      });
    });

    it('Supports filtering by status', () => {
      stripe.orders.list({
        status: 'active',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders',
        data: {
          status: 'active',
        },
        headers: {},
      });
    });
  });

  describe('pay', () => {
    it('Sends the correct request', () => {
      stripe.orders.pay('orderIdFoo3242', {
        source: 'tok_FooBar',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders/orderIdFoo3242/pay',
        headers: {},
        data: {source: 'tok_FooBar'},
      });
    });
  });

  describe('returnOrder', () => {
    it('Sends the correct request', () => {
      stripe.orders.returnOrder('orderIdFoo3242', {
        items: [{parent: 'sku_123'}],
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders/orderIdFoo3242/returns',
        headers: {},
        data: {items: [{parent: 'sku_123'}]},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.orders.update('orderIdFoo3242', {status: 'fulfilled'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/orders/orderIdFoo3242',
        headers: {},
        data: {status: 'fulfilled'},
      });
    });
  });
});
