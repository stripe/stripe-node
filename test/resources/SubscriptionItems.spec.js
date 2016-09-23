'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('SubscriptionItems Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.subscriptionItems.retrieve('test_sub_item');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_items/test_sub_item',
        headers: {},
        data: {},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.subscriptionItems.del('test_sub_item');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/subscription_items/test_sub_item',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.subscriptionItems.update('test_sub_item', {
        plan: 'gold',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_items/test_sub_item',
        headers: {},
        data: {
          plan: 'gold',
        },
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.subscriptionItems.create({
        subscription: 'test_sub',
        plan: 'gold',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_items',
        headers: {},
        data: {
          subscription: 'test_sub',
          plan: 'gold',
        },
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.subscriptionItems.list({
        limit: 3,
        subscription: 'test_sub',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_items',
        headers: {},
        data: {
          limit: 3,
          subscription: 'test_sub',
        },
      });
    });
  });
});
