'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Plans Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.prices.retrieve('price_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/prices/price_123',
        headers: {},
        data: {},
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
      stripe.prices.update('priceId3', {
        amount: 1900,
        currency: 'usd',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/prices/priceId3',
        headers: {},
        data: {amount: 1900, currency: 'usd'},
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
        data: {},
        settings: {},
      });
    });
  });
});
