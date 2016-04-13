'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('subscriptions Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.subscriptions.retrieve('test_sub');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscriptions/test_sub',
        headers: {},
        data: {},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      stripe.subscriptions.del('test_sub');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/subscriptions/test_sub',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.subscriptions.update('test_sub', {
        metadata: {a: '1234'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions/test_sub',
        headers: {},
        data: {
          metadata: {a: '1234'},
        },
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.subscriptions.create({
        customer: 'test_cus',
        plan: 'gold',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions',
        headers: {},
        data: {
          customer: 'test_cus',
          plan: 'gold',
        },
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.subscriptions.list({
        limit: 3,
        customer: 'test_cus',
        plan: 'gold',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscriptions',
        headers: {},
        data: {
          limit: 3,
          customer: 'test_cus',
          plan: 'gold',
        },
      });
    });
  });

  describe('Discount methods', function() {
    describe('deleteDiscount', function() {
      it('Sends the correct request', function() {
        stripe.subscriptions.deleteDiscount('test_sub');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/subscriptions/test_sub/discount',
          headers: {},
          data: {},
        });
      });
    });
  });
});
