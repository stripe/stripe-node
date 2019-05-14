'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Charge Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.charges.retrieve('chargeIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.charges.create({
        amount: '1500',
        currency: 'usd',
        shipping: {
          address: {
            line1: 'foo',
          },
        },
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges',
        data: {
          amount: '1500',
          currency: 'usd',
          shipping: {
            address: {
              line1: 'foo',
            },
          },
        },
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.charges.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges',
        data: {},
        headers: {},
      });
    });
  });

  describe('capture', () => {
    it('Sends the correct request', () => {
      stripe.charges.capture('chargeIdExample3242', {amount: 23});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/capture',
        headers: {},
        data: {amount: 23},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.charges.update('chargeIdExample3242', {description: 'foo321'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        headers: {},
        data: {description: 'foo321'},
      });
    });
  });
});
