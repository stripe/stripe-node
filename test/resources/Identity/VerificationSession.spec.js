'use strict';

const stripe = require('../../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('Identity', () => {
  describe('VerificationSession Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationSessions.create({type: 'id_number'});
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/identity/verification_sessions',
          data: {type: 'id_number'},
          headers: {},
          settings: {},
        });
      });
    });

    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationSessions.retrieve('vs_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_sessions/vs_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationSessions.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_sessions',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationSessions.update('vs_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/identity/verification_sessions/vs_123',
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

    describe('cancel', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationSessions.cancel('vs_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/identity/verification_sessions/vs_123/cancel',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('redact', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationSessions.redact('vs_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/identity/verification_sessions/vs_123/redact',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
