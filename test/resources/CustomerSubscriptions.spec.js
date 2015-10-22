'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'customerIdTest999';

// Create new CustomerSubscription instance with pre-filled customerId:
var customerSubscription = new resources.CustomerSubscriptions(
    stripe,
    {customerId: CUSTOMER_TEST_ID}
);

// Use spy from existing resource:
customerSubscription._request = stripe.customers._request;

describe('CustomerSubscription Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      customerSubscription.retrieve('subscriptionIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions/subscriptionIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      customerSubscription.create({
        plan: 'gold', quantity: '12',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions',
        headers: {},
        data: {plan: 'gold', quantity: '12'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      customerSubscription.update('subscriptionIdFoo456', {
        name: 'Bob M. Baz',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions/subscriptionIdFoo456',
        headers: {},
        data: {name: 'Bob M. Baz'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      customerSubscription.del('subscriptionIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions/subscriptionIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      customerSubscription.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/subscriptions',
        headers: {},
        data: {},
      });
    });
  });

  describe('Discount methods', function() {
    describe('deleteDiscount', function() {
      it('Sends the correct request', function() {
        customerSubscription.deleteDiscount('customerIdFoo321', 'subscriptionIdBar654');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/customers/customerIdFoo321/subscriptions/subscriptionIdBar654/discount',
          headers: {},
          data: {},
        });
      });
    });
  });
});
