'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Product Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.products.retrieve('productIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products/productIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
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
      });
    });
  })

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.products.list({
        limit: 3,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products',
        data: {
          limit: 3,
        },
        headers: {},
      });
    });

    it('Supports filtering by shippable', function() {
      stripe.products.list({
        shippable: true,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/products',
        data: {
          shippable: true,
        },
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.products.update('productIdFoo3242', {caption: 'test'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/products/productIdFoo3242',
        headers: {},
        data: {caption: 'test'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.products.del('productIdFoo3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/products/productIdFoo3242',
        headers: {},
        data: {},
      });
    });
  });
});
