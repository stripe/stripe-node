'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var ACCOUNT_ID = 'acct_EXPRESS';

// Create new LoginLink instance with pre-filled accountId:
var loginLink = new resources.LoginLinks(
  stripe,
  {accountId: ACCOUNT_ID}
);

// Use spy from existing resource:
loginLink._request = stripe.customers._request;

describe('LoginLink Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
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
