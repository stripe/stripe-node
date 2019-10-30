'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const SETUP_INTENT_TEST_ID = 'seti_123';

describe('Setup Intents Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      const params = {
        payment_method_types: ['card'],
      };
      stripe.setupIntents.create(params);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/setup_intents',
        headers: {},
        data: params,
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.setupIntents.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/setup_intents',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.setupIntents.retrieve(SETUP_INTENT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/setup_intents/${SETUP_INTENT_TEST_ID}`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.setupIntents.update(SETUP_INTENT_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/setup_intents/${SETUP_INTENT_TEST_ID}`,
        headers: {},
        data: {metadata: {key: 'value'}},
        settings: {},
      });
    });
  });

  describe('cancel', () => {
    it('Sends the correct request', () => {
      stripe.setupIntents.cancel(SETUP_INTENT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/setup_intents/${SETUP_INTENT_TEST_ID}/cancel`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('confirm', () => {
    it('Sends the correct request', () => {
      stripe.setupIntents.confirm(SETUP_INTENT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/setup_intents/${SETUP_INTENT_TEST_ID}/confirm`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
