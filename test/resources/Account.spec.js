'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

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

});
