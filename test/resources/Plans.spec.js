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
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.plans.create({
        amount: 200, currency: 'usd'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        data: { amount: 200, currency: 'usd' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.plans.update('planId3', {
        amount: 1900, currency: 'usd'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans/planId3',
        data: { amount: 1900, currency: 'usd' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      stripe.plans.del('planId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/plans/planId4',
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
        data: {}
      });

    });

  });

});
