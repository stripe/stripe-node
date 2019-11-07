'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Order Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.orders.retrieve('orderIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders/orderIdFoo123',
        data: {},
        headers: {},
        settings: {},
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
        settings: {},
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
        url: '/v1/orders?limit=3',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Supports filtering by status', () => {
      stripe.orders.list({
        status: 'active',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/orders?status=active',
        data: {},
        headers: {},
        settings: {},
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
        settings: {},
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
        settings: {},
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
        settings: {},
      });
    });
  });
});
