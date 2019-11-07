'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Issuing', () => {
  describe('Authorization Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.issuing.authorizations.retrieve('iauth_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/authorizations/iauth_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.issuing.authorizations.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/authorizations',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.issuing.authorizations.update('iauth_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/authorizations/iauth_123',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes',
            },
          },
          settings: {},
        });
      });
    });

    describe('approve', () => {
      it('Sends the correct request', () => {
        stripe.issuing.authorizations.approve('iauth_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/authorizations/iauth_123/approve',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('decline', () => {
      it('Sends the correct request', () => {
        stripe.issuing.authorizations.decline('iauth_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/authorizations/iauth_123/decline',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
