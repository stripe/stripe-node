'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'customerIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
var customerCard = new resources.CustomerCards(
  stripe,
  { customerId: CUSTOMER_TEST_ID }
);

// Use spy from existing resource:
customerCard._request = stripe.customers._request;

describe('CustomerCard Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      customerCard.retrieve('cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      customerCard.create({
        number: '123456', exp_month: '12'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        data: { number: '123456', exp_month: '12' }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      customerCard.update('cardIdFoo456', {
        name: 'Bob M. Baz'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        data: { name: 'Bob M. Baz' }
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      customerCard.del('cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      customerCard.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        data: {}
      });

    });

  });

});
