'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();

const expect = require('chai').expect;

describe('BillingPortal', () => {
  describe('Sessions Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        const params = {
          customer: 'cus_123',
          return_url: 'https://stripe.com/return',
        };
        stripe.billingPortal.sessions.create(params);

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/billing_portal/sessions',
          headers: {},
          data: params,
          settings: {},
        });
      });
    });
  });
});
