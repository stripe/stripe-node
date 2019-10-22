'use strict';

const stripe = require('../../testUtils').getSpyableStripe();

const expect = require('chai').expect;
const URL = require('url');
const qs = require('qs');

describe('OAuth', () => {
  describe('authorize', () => {
    describe('when a default client_id is set', () => {
      beforeEach(() => {
        stripe.setClientId('default_client_id');
      });

      it('Uses the correct host', () => {
        const url = stripe.oauth.authorizeUrl();

        const host = URL.parse(url).hostname;

        expect(host).to.equal('connect.stripe.com');
      });

      it('Uses the correct path', () => {
        const url = stripe.oauth.authorizeUrl({state: 'some_state'});

        const pathname = URL.parse(url).pathname;

        expect(pathname).to.equal('/oauth/authorize');
      });

      it('Uses the correct query', () => {
        const url = stripe.oauth.authorizeUrl({state: 'some_state'});

        const query = qs.parse(URL.parse(url).query);

        expect(query.client_id).to.equal('default_client_id');
        expect(query.response_type).to.equal('code');
        expect(query.scope).to.equal('read_write');
        expect(query.state).to.equal('some_state');
      });

      it('Uses a provided client_id instead of the default', () => {
        const url = stripe.oauth.authorizeUrl({client_id: '123abc'});

        const query = qs.parse(URL.parse(url).query);

        expect(query.client_id).to.equal('123abc');
      });

      describe('for Express account', () => {
        it('Uses the correct path', () => {
          const url = stripe.oauth.authorizeUrl({}, {express: true});

          const pathname = URL.parse(url).pathname;

          expect(pathname).to.equal('/express/oauth/authorize');
        });
      });
    });
  });

  describe('token', () => {
    it('Sends the correct request', () => {
      stripe.oauth.token({
        code: '123abc',
        grant_type: 'authorization_code',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        host: 'connect.stripe.com',
        url: '/oauth/token',
        headers: {},
        data: {
          code: '123abc',
          grant_type: 'authorization_code',
        },
        settings: {},
      });
    });
  });

  describe('deauthorize', () => {
    beforeEach(() => {
      stripe.setClientId('default_client_id');
    });

    it('Sends the correct request without explicit client_id', () => {
      stripe.oauth.deauthorize({
        stripe_user_id: 'some_user_id',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        host: 'connect.stripe.com',
        url: '/oauth/deauthorize',
        headers: {},
        data: {
          client_id: stripe.getClientId(),
          stripe_user_id: 'some_user_id',
        },
        settings: {},
      });
    });

    it('Sends the correct request with explicit client_id', () => {
      stripe.oauth.deauthorize({
        stripe_user_id: 'some_user_id',
        client_id: '123abc',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        host: 'connect.stripe.com',
        url: '/oauth/deauthorize',
        headers: {},
        data: {
          client_id: '123abc',
          stripe_user_id: 'some_user_id',
        },
        settings: {},
      });
    });
  });
});
