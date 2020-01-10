'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Account Resource', () => {
  function uniqueEmail() {
    return `${Math.random()}bob@example.com`;
  }
  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        managed: false,
        country: 'US',
        email: uniqueEmail(),
      };
      stripe.account.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts',
        data,
        headers: {},
        settings: {},
      });
    });
  });

  describe('delete', () => {
    it('deletes an account successfully', () => {
      stripe.account.del('acct_16Tzq6DBahdM4C8s');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/accounts/acct_16Tzq6DBahdM4C8s',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('reject', () => {
    it('rejects an account successfully', () => {
      stripe.account.reject('acct_16Tzq6DBahdM4C8s', {reason: 'fraud'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/accounts/acct_16Tzq6DBahdM4C8s/reject',
        data: {reason: 'fraud'},
        headers: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request with no params', () => {
      stripe.account.retrieve();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Sends the correct request with ID param', () => {
      stripe.account.retrieve('foo');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts/foo',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Sends the correct request with secret key', () => {
      const key = 'sk_12345678901234567890123456789012';
      stripe.account.retrieve(null, key);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        auth: key,
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Sends the correct request with secret key as first object', () => {
      const params = {apiKey: 'sk_12345678901234567890123456789012'};
      stripe.account.retrieve(params);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        auth: params.apiKey,
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Sends the correct request with a callback', () => {
      stripe.account.retrieve((err, account) => {});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('Capability methods', () => {
    describe('listCapabilities', () => {
      it('Sends the correct request', () => {
        stripe.account.listCapabilities('acct_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/capabilities',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.listCapabilities('acct_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/capabilities',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('retrieveCapability', () => {
      it('Sends the correct request', () => {
        stripe.account.retrieveCapability('acct_123', 'acap_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/capabilities/acap_123',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.retrieveCapability(
          'acct_123',
          'acap_123',
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/capabilities/acap_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('updateCapability', () => {
      it('Sends the correct request', () => {
        stripe.account.updateCapability('acct_123', 'acap_123', {
          first_name: 'John',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/acct_123/capabilities/acap_123',
          headers: {},
          data: {first_name: 'John'},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.updateCapability(
          'acct_123',
          'acap_123',
          {
            first_name: 'John',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/acct_123/capabilities/acap_123',
          headers: {},
          data: {first_name: 'John'},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });
  });

  describe('External account methods', () => {
    describe('retrieveExternalAccount', () => {
      it('Sends the correct request', () => {
        stripe.account.retrieveExternalAccount(
          'accountIdFoo321',
          'externalAccountIdFoo456'
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url:
            '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.retrieveExternalAccount(
          'accountIdFoo321',
          'externalAccountIdFoo456',
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url:
            '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('createExternalAccount', () => {
      it('Sends the correct request', () => {
        stripe.account.createExternalAccount('accountIdFoo321', {
          number: '123456',
          currency: 'usd',
          country: 'US',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {number: '123456', currency: 'usd', country: 'US'},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.createExternalAccount(
          'accountIdFoo321',
          {
            number: '123456',
            currency: 'usd',
            country: 'US',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {number: '123456', currency: 'usd', country: 'US'},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('updateExternalAccount', () => {
      it('Sends the correct request', () => {
        stripe.account.updateExternalAccount(
          'accountIdFoo321',
          'externalAccountIdFoo456',
          {
            default_for_currency: true,
          }
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url:
            '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {default_for_currency: true},
          settings: {},
        });
      });
    });

    describe('deleteExternalAccount', () => {
      it('Sends the correct request', () => {
        stripe.account.deleteExternalAccount(
          'accountIdFoo321',
          'externalAccountIdFoo456'
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url:
            '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.deleteExternalAccount(
          'accountIdFoo321',
          'externalAccountIdFoo456',
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url:
            '/v1/accounts/accountIdFoo321/external_accounts/externalAccountIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('listExternalAccounts', () => {
      it('Sends the correct request', () => {
        stripe.account.listExternalAccounts('accountIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.listExternalAccounts('accountIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/external_accounts',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });
  });

  describe('LoginLink methods', () => {
    describe('createLoginLink', () => {
      it('Sends the correct request', () => {
        stripe.account.createLoginLink('acct_EXPRESS');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/acct_EXPRESS/login_links',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });

  describe('Person methods', () => {
    describe('retrievePerson', () => {
      it('Sends the correct request', () => {
        stripe.account.retrievePerson('acct_123', 'person_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/persons/person_123',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.retrievePerson('acct_123', 'person_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/persons/person_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('createPerson', () => {
      it('Sends the correct request', () => {
        stripe.account.createPerson('acct_123', {
          first_name: 'John',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/acct_123/persons',
          headers: {},
          data: {first_name: 'John'},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.createPerson(
          'acct_123',
          {
            first_name: 'John',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/acct_123/persons',
          headers: {},
          data: {first_name: 'John'},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('updatePerson', () => {
      it('Sends the correct request', () => {
        stripe.account.updatePerson('acct_123', 'person_123', {
          first_name: 'John',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/acct_123/persons/person_123',
          headers: {},
          data: {first_name: 'John'},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.updatePerson(
          'acct_123',
          'person_123',
          {
            first_name: 'John',
          },
          TEST_AUTH_KEY
        );
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/acct_123/persons/person_123',
          headers: {},
          data: {first_name: 'John'},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('deletePerson', () => {
      it('Sends the correct request', () => {
        stripe.account.deletePerson('acct_123', 'person_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/accounts/acct_123/persons/person_123',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.deletePerson('acct_123', 'person_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/accounts/acct_123/persons/person_123',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });

    describe('listPersons', () => {
      it('Sends the correct request', () => {
        stripe.account.listPersons('acct_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/persons',
          headers: {},
          data: {},
          settings: {},
        });
      });

      it('Sends the correct request [with specified auth]', () => {
        stripe.account.listPersons('acct_123', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/acct_123/persons',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY,
          settings: {},
        });
      });
    });
  });
});
