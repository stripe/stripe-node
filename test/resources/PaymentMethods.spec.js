'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('PaymentMethods Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.paymentMethods.retrieve('pm_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_methods/pm_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      var data = {
        type: 'card',
      };
      stripe.paymentMethods.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods',
        headers: {},
        data: data,
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      var data = {
        customer: 'cus_123',
        type: 'card',
      };
      stripe.paymentMethods.list(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_methods',
        headers: {},
        data: data,
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      var data = {
        metadata: {key: 'value'},
      };
      stripe.paymentMethods.update('pm_123', data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods/pm_123',
        headers: {},
        data: data,
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
      });
    });
  });
});
