'use strict';

const resources = require('../../lib/stripe').resources;
const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const ACCOUNT_ID = 'acct_EXPRESS';

// Create new LoginLink instance with pre-filled accountId:
const loginLink = new resources.LoginLinks(stripe, {accountId: ACCOUNT_ID});

// Use spy from existing resource:
loginLink._request = stripe.customers._request;

describe('LoginLink Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      loginLink.create();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts/' + ACCOUNT_ID + '/login_links',
        headers: {},
        data: {},
      });
    });
  });
});
