'use strict';

const stripe = require('../testUtils.js').getSpyableStripe();
const expect = require('chai').expect;

describe('Product Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.products.retrieve('productIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products/productIdFoo123',
        data: null,
        headers: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.products.create({
        name: 'Llamas',
        active: true,
        type: 'good',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/products',
        data: {
          name: 'Llamas',
          active: true,
          type: 'good',
        },
        headers: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.products.list({
        limit: 3,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products?limit=3',
        data: null,
        headers: {},
        settings: {},
      });
    });

    it('Supports filtering by shippable', () => {
      stripe.products.list({
        shippable: true,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products?shippable=true',
        data: null,
        headers: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.products.update('productIdFoo3242', {caption: 'test'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/products/productIdFoo3242',
        headers: {},
        data: {caption: 'test'},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.products.del('productIdFoo3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/products/productIdFoo3242',
        headers: {},
        data: null,
        settings: {},
      });
    });
  });
});
