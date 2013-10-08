'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Account Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.account.retrieve();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/account',
        data: {}
      });

    });

  });

});