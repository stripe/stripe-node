'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Account Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request with no params', function() {

      stripe.account.retrieve();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
      });

    });

    it('Sends the correct request with ID param', function() {

      stripe.account.retrieve('foo');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/accounts/foo',
        data: {},
        headers: {},
      });

    });

    it('Sends the correct request with secret key', function() {

      var key = 'sk_12345678901234567890123456789012'
      stripe.account.retrieve(key);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        auth: key,
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct request with a callback', function() {

      stripe.account.retrieve(function(err, account) {});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {},
        headers: {},
      });

    });

  });

  describe('Bank account methods', function() {

    describe('retrieveBankAccount', function() {

      it('Sends the correct request', function() {

        stripe.account.retrieveBankAccount('accountIdFoo321', 'bankAccountIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/bank_accounts/bankAccountIdFoo456',
          headers: {},
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.account.retrieveBankAccount('accountIdFoo321', 'bankAccountIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/bank_accounts/bankAccountIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('createBankAccount', function() {

      it('Sends the correct request', function() {

        stripe.account.createBankAccount('accountIdFoo321', {
          number: '123456', currency: 'usd', country: 'US'
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/bank_accounts',
          headers: {},
          data: { number: '123456', currency: 'usd', country: 'US' }
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.account.createBankAccount('accountIdFoo321', {
          number: '123456', currency: 'usd', country: 'US'
        }, TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/bank_accounts',
          headers: {},
          data: { number: '123456', currency: 'usd', country: 'US' },
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('updateBankAccount', function() {

      it('Sends the correct request', function() {

        stripe.account.updateBankAccount('accountIdFoo321', 'bankAccountIdFoo456', {
          default_for_currency: true
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/accounts/accountIdFoo321/bank_accounts/bankAccountIdFoo456',
          headers: {},
          data: { default_for_currency: true }
        });

      });

    });

    describe('deleteBankAccount', function() {

      it('Sends the correct request', function() {

        stripe.account.deleteBankAccount('accountIdFoo321', 'bankAccountIdFoo456');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/accounts/accountIdFoo321/bank_accounts/bankAccountIdFoo456',
          headers: {},
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.account.deleteBankAccount('accountIdFoo321', 'bankAccountIdFoo456', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/accounts/accountIdFoo321/bank_accounts/bankAccountIdFoo456',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

    describe('listBankAccounts', function() {

      it('Sends the correct request', function() {

        stripe.account.listBankAccounts('accountIdFoo321');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/bank_accounts',
          headers: {},
          data: {}
        });

      });

      it('Sends the correct request [with specified auth]', function() {

        stripe.account.listBankAccounts('accountIdFoo321', TEST_AUTH_KEY);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/accounts/accountIdFoo321/bank_accounts',
          headers: {},
          data: {},
          auth: TEST_AUTH_KEY
        });

      });

    });

  });

});
