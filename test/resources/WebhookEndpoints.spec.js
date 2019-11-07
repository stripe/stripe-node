'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('WebhookEndpoints Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.webhookEndpoints.retrieve('we_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.webhookEndpoints.del('we_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.webhookEndpoints.update('we_123', {
        enabled_events: ['charge.succeeded'],
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {
          enabled_events: ['charge.succeeded'],
        },
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.webhookEndpoints.create({
        enabled_events: ['charge.succeeded'],
        url: 'https://stripe.com',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/webhook_endpoints',
        headers: {},
        data: {
          enabled_events: ['charge.succeeded'],
          url: 'https://stripe.com',
        },
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.webhookEndpoints.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/webhook_endpoints',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
