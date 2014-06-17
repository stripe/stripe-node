'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var CHARGE_TEST_ID = 'chargeIdTest999';

// Create new CustomerCard instance with pre-filled customerId:
var chargeRefund = new resources.ChargeRefunds(
  stripe,
  { chargeId: CHARGE_TEST_ID }
);

// Use spy from existing resource:
chargeRefund._request = stripe.customers._request;

describe('ChargeRefund Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      chargeRefund.retrieve('refundIdFoo456');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds/refundIdFoo456',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      chargeRefund.create({
        amount: 100
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds',
        data: { amount: 100 }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      chargeRefund.update('refundIdFoo456', {
        metadata: {key: 'value'}
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds/refundIdFoo456',
        data: { metadata: {key: 'value'}}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      chargeRefund.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/' + CHARGE_TEST_ID + '/refunds',
        data: {}
      });

    });

  });

});
