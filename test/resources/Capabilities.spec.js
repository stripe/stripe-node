'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var ACCOUNT_TEST_ID = 'acct_123';
var CAPABILITY_TEST_ID = 'acap_123';

// Create new Capability instance with pre-filled accountId:
var capability = new resources.Capabilities(
  stripe,
  {accountId: ACCOUNT_TEST_ID}
);

// Use spy from existing resource:
capability._request = stripe.customers._request;

describe('Capability Resource', function() {
  describe('list', function() {
    it('Sends the correct request', function() {
      capability.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/capabilities',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      capability.retrieve(CAPABILITY_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/capabilities/' + CAPABILITY_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      capability.update(CAPABILITY_TEST_ID, {
        first_name: 'John',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/capabilities/' + CAPABILITY_TEST_ID,
        data: {first_name: 'John'},
        headers: {},
      });
    });
  });
});

