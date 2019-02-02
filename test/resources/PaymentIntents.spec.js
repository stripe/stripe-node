'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var PAYMENT_INTENT_TEST_ID = 'pi_123';

describe('Payment Intents Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      var params = {
        amount: 200,
        currency: 'usd',
        payment_method_types: ['card'],
      };
      stripe.paymentIntents.create(params);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_intents',
        headers: {},
        data: params,
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.paymentIntents.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_intents',
        headers: {},
        data: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.paymentIntents.retrieve(PAYMENT_INTENT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_intents/' + PAYMENT_INTENT_TEST_ID,
        headers: {},
        data: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.paymentIntents.update(PAYMENT_INTENT_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_intents/' + PAYMENT_INTENT_TEST_ID,
        headers: {},
        data: {metadata: {key: 'value'}},
      });
    });
  });

  describe('cancel', function() {
    it('Sends the correct request', function() {
      stripe.paymentIntents.cancel(PAYMENT_INTENT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_intents/' + PAYMENT_INTENT_TEST_ID + '/cancel',
        headers: {},
        data: {},
      });
    });
  });

  describe('capture', function() {
    it('Sends the correct request', function() {
      stripe.paymentIntents.capture(PAYMENT_INTENT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_intents/' + PAYMENT_INTENT_TEST_ID + '/capture',
        headers: {},
        data: {},
      });
    });
  });

  describe('confirm', function() {
    it('Sends the correct request', function() {
      stripe.paymentIntents.confirm(PAYMENT_INTENT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_intents/' + PAYMENT_INTENT_TEST_ID + '/confirm',
        headers: {},
        data: {},
      });
    });
  });
});
