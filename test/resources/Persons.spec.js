'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var ACCOUNT_TEST_ID = 'acct_123';
var PERSON_TEST_ID = 'person_123';

// Create new Person instance with pre-filled accountId:
var person = new resources.Persons(
  stripe,
  {accountId: ACCOUNT_TEST_ID}
);

// Use spy from existing resource:
person._request = stripe.customers._request;

describe('Person Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      person.create({
        first_name: 'John',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/persons',
        data: {first_name: 'John'},
        headers: {},
      });
    });
  });

  describe('delete', function() {
    it('Sends the correct request', function() {
      person.del(PERSON_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/persons/' + PERSON_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      person.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/persons',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      person.retrieve(PERSON_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/persons/' + PERSON_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      person.update(PERSON_TEST_ID, {
        first_name: 'John',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts/' + ACCOUNT_TEST_ID + '/persons/' + PERSON_TEST_ID,
        data: {first_name: 'John'},
        headers: {},
      });
    });
  });
});

