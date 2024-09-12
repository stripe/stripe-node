'use strict';

const stripe = require('../testUtils.js').getSpyableStripe();
const expect = require('chai').expect;

describe('Plans Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.prices.retrieve('price_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/prices/price_123',
        headers: {},
        data: null,
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.prices.create({
        unit_amount: 200,
        currency: 'usd',
        recurring: {
          interval: 'month',
        },
        product_data: {
          name: 'Product name',
        },
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/prices',
        headers: {},
        data: {
          unit_amount: 200,
          currency: 'usd',
          recurring: {
            interval: 'month',
          },
          product_data: {
            name: 'Product name',
          },
        },
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.prices.update('price_123', {
        active: false,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/prices/price_123',
        headers: {},
        data: {active: false},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.prices.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/prices',
        headers: {},
        data: null,
        settings: {},
      });
    });
  });
});
