'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('SKU Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.skus.retrieve('skuIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/skus/skuIdFoo123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
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
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.skus.list({
        limit: 3,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/skus?limit=3',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Supports filtering by product', () => {
      stripe.skus.list({
        product: 'prodId123',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/skus?product=prodId123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.skus.update('skuIdFoo3242', {caption: 'test'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/skus/skuIdFoo3242',
        headers: {},
        data: {caption: 'test'},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.skus.del('skuIdFoo3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/skus/skuIdFoo3242',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
