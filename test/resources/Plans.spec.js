'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Plans Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.plans.retrieve('planId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans/planId1',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.plans.create({
        amount: 200,
        currency: 'usd',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {amount: 200, currency: 'usd'},
        settings: {},
      });
    });

    it('Sends the correct request for metered', () => {
      stripe.plans.create({
        amount: 200,
        currency: 'usd',
        usage_type: 'metered',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {amount: 200, currency: 'usd', usage_type: 'metered'},
        settings: {},
      });
    });

    it('Sends the correct request for tiered plans', () => {
      stripe.plans.create({
        currency: 'usd',
        billing_scheme: 'tiered',
        tiers: [
          {up_to: 123, amount: 100},
          {up_to: 'inf', amount: 200},
        ],
        tiers_mode: 'volume',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {
          currency: 'usd',
          billing_scheme: 'tiered',
          tiers: [
            {up_to: 123, amount: 100},
            {up_to: 'inf', amount: 200},
          ],
          tiers_mode: 'volume',
        },
        settings: {},
      });
    });

    it('Sends the correct request for transform usage plans', () => {
      stripe.plans.create({
        amount: 200,
        currency: 'usd',
        transform_usage: {divide_by: 123, round: 'up'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {
          amount: 200,
          currency: 'usd',
          transform_usage: {divide_by: 123, round: 'up'},
        },
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.plans.update('planId3', {
        amount: 1900,
        currency: 'usd',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans/planId3',
        headers: {},
        data: {amount: 1900, currency: 'usd'},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.plans.del('planId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/plans/planId4',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.plans.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
