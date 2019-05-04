'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'customerIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
var customerCard = new resources.CustomerCards(stripe, {
  customerId: CUSTOMER_TEST_ID,
});

// Use spy from existing resource:
customerCard._request = stripe.customers._request;

describe('CustomerCard Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      customerCard.retrieve('cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      customerCard.create({
        number: '123456',
        exp_month: '12',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        headers: {},
        data: {number: '123456', exp_month: '12'},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      customerCard.update('cardIdFoo456', {
        name: 'Bob M. Baz',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {name: 'Bob M. Baz'},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      customerCard.del('cardIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards/cardIdFoo456',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      customerCard.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/cards',
        headers: {},
        data: {},
      });
    });
  });
});
