'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Issuing', function () {
  describe('Authorization Resource', function() {
    describe('retrieve', function() {
      it('Sends the correct request', function() {
        stripe.issuing.authorizations.retrieve('iauth_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/authorizations/iauth_123',
          data: {},
          headers: {},
        });
      });
    });

    describe('list', function() {
      it('Sends the correct request', function() {
        stripe.issuing.authorizations.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/authorizations',
          data: {},
          headers: {},
        });
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        stripe.issuing.authorizations.update('iauth_123', {
          metadata: {
            thing1: true,
            thing2: 'yes'
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/authorizations/iauth_123',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes'
            },
          },
        });
      });
    });

    describe('approve', function() {
      it('Sends the correct request', function() {
        stripe.issuing.authorizations.approve('iauth_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/authorizations/iauth_123/approve',
          headers: {},
          data: {},
        });
      });
    });

    describe('decline', function() {
      it('Sends the correct request', function() {
        stripe.issuing.authorizations.decline('iauth_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/authorizations/iauth_123/decline',
          headers: {},
          data: {},
        });
      });
    });
  });
});
