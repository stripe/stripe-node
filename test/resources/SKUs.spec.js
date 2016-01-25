'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('SKU Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.skus.retrieve('skuIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/skus/skuIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.skus.create({
        currency: 'usd',
        inventory: {type: 'finite', quantity: 500},
        attributes: {size: 'Medium', gender: 'Unisex'},
        price: 500,
        product: 'prodIdTest123',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/skus',
        data: {
          currency: 'usd',
          inventory: {type: 'finite', quantity: 500},
          attributes: {size: 'Medium', gender: 'Unisex'},
          price: 500,
          product: 'prodIdTest123',
        },
        headers: {},
      });
    });
  })

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.skus.list({
        limit: 3,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/skus',
        data: {
          limit: 3,
        },
        headers: {},
      });
    });

    it('Supports filtering by product', function() {
      stripe.skus.list({
        product: 'prodId123',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/skus',
        data: {
          product: 'prodId123',
        },
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.skus.update('skuIdFoo3242', {caption: 'test'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/skus/skuIdFoo3242',
        headers: {},
        data: {caption: 'test'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.skus.del('skuIdFoo3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/skus/skuIdFoo3242',
        headers: {},
        data: {},
      });
    });
  });
});
