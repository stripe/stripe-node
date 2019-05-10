'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const ACCOUNT_TEST_ID = 'acct_123';
const PERSON_TEST_ID = 'person_123';

describe('Person Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.persons.create(ACCOUNT_TEST_ID, {
        first_name: 'John',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/accounts/${ACCOUNT_TEST_ID}/persons`,
        data: {first_name: 'John'},
        headers: {},
      });
    });
  });

  describe('delete', () => {
    it('Sends the correct request', () => {
      stripe.persons.del(ACCOUNT_TEST_ID, PERSON_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: `/v1/accounts/${ACCOUNT_TEST_ID}/persons/${PERSON_TEST_ID}`,
        data: {},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.persons.list(ACCOUNT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/accounts/${ACCOUNT_TEST_ID}/persons`,
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.persons.retrieve(ACCOUNT_TEST_ID, PERSON_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/accounts/${ACCOUNT_TEST_ID}/persons/${PERSON_TEST_ID}`,
        data: {},
        headers: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.persons.update(ACCOUNT_TEST_ID, PERSON_TEST_ID, {
        first_name: 'John',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/accounts/${ACCOUNT_TEST_ID}/persons/${PERSON_TEST_ID}`,
        data: {first_name: 'John'},
        headers: {},
      });
    });
  });
});
