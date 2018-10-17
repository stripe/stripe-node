'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('WebhookEndpoints Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.webhookEndpoints.retrieve('we_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.webhookEndpoints.del('we_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
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
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
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
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.webhookEndpoints.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/webhook_endpoints',
        headers: {},
        data: {},
      });
    });
  });
});
