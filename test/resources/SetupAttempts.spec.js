'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Setup Attempts Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.setupAttempts.list({setup_intent: 'si_123'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/setup_attempts?setup_intent=si_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
