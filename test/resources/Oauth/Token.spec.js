'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Oauth', function() {
  describe('Token Resource', function() {
    describe('create', function() {
      it('Sends the correct request', function() {
        stripe.oauth.token.create({
          code: '123abc',
          grant_type: 'authorization_code'
        });

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          host: 'connect.stripe.com',
          url: '/oauth/token',
          headers: {},
          data: {
            code: '123abc',
            grant_type: 'authorization_code'
          },
        });
      });
    });
  });
});
