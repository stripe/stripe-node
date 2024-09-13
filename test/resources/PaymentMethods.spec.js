'use strict';

const stripe = require('../testUtils.js').getSpyableStripe();
const expect = require('chai').expect;

describe('PaymentMethods Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.paymentMethods.retrieve('pm_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_methods/pm_123',
        headers: {},
        data: null,
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        type: 'card',
      };
      stripe.paymentMethods.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods',
        headers: {},
        data,
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      const data = {
        customer: 'cus_123',
        type: 'card',
      };
      stripe.paymentMethods.list(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_methods?customer=cus_123&type=card',
        headers: {},
        data: null,
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      const data = {
        metadata: {key: 'value'},
      };
      stripe.paymentMethods.update('pm_123', data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods/pm_123',
        headers: {},
        data,
        settings: {},
      });
    });
  });

  describe('attach', () => {
    it('Sends the correct request', () => {
      stripe.paymentMethods.attach('pm_123', {customer: 'cus_123'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods/pm_123/attach',
        headers: {},
        data: {customer: 'cus_123'},
        settings: {},
      });
    });
  });

  describe('detach', () => {
    it('Sends the correct request', () => {
      stripe.paymentMethods.detach('pm_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods/pm_123/detach',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
