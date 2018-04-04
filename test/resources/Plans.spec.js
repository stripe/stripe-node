'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Plans Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.plans.retrieve('planId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans/planId1',
        headers: {},
        data: {}
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.plans.create({
        amount: 200,
        currency: 'usd'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {amount: 200, currency: 'usd'}
      });
    });

    it('Sends the correct request for metered', function() {
      stripe.plans.create({
        amount: 200,
        currency: 'usd',
        usage_type: 'metered'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {amount: 200, currency: 'usd', usage_type: 'metered'}
      });
    });

    it('Sends the correct request for tiered plans', function() {
      stripe.plans.create({
        currency: 'usd',
        billing_scheme: 'tiered',
        tiers: [{up_to: 123, amount: 100}, {up_to: 'inf', amount: 200}],
        tiers_mode: 'volume'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {
          currency: 'usd',
          billing_scheme: 'tiered',
          tiers: [{up_to: 123, amount: 100}, {up_to: 'inf', amount: 200}],
          tiers_mode: 'volume'
        }
      });
    });

    it('Sends the correct request for transform usage plans', function() {
      stripe.plans.create({
        amount: 200,
        currency: 'usd',
        transform_usage: {divide_by: 123, round: 'up'}
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {
          amount: 200,
          currency: 'usd',
          transform_usage: {divide_by: 123, round: 'up'}
        }
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.plans.update('planId3', {
        amount: 1900,
        currency: 'usd'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans/planId3',
        headers: {},
        data: {amount: 1900, currency: 'usd'}
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.plans.del('planId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/plans/planId4',
        headers: {},
        data: {}
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.plans.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans',
        headers: {},
        data: {}
      });
    });
  });
});
