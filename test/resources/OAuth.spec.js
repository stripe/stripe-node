'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
stripe.clientId = 'default_client_id';

var expect = require('chai').expect;

describe('OAuth', function() {
  describe('authorize', function() {
    describe('when a default clientId is not set', function() {
      beforeEach(function() {
        stripe.clientId = '';
      });

      describe('without an explicitly provided clientId', function() {
        it('Prompts the user to set a default clientId or provide one explicitly', function() {
          expect(stripe.oAuth.authorizeUrl.bind(stripe.oAuth)).to.throw(Error,
            'Please set stripe.clientId or pass it as a parameter when calling this method. ' +
            'You can find your clientId at https://dashboard.stripe.com/account/applications/settings.'
          );
        });
      });

      describe('with an explicitly provided clientId', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl({client_id: '123abc'});

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?client_id=123abc&response_type=code&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });
      })
    });

    describe('when a default clientId is set', function() {
      beforeEach(function() {
        stripe.clientId = 'default_client_id';
      });

      describe('when required parameters are not provided', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl();

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=default_client_id&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });

        it('Generates the correct URL with state provided', function() {
          var url = stripe.oAuth.authorizeUrl({state: 'some_state'});

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?state=some_state&response_type=code&client_id=default_client_id&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });
      });

      describe('for non-Express account', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
            }
          );

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=123abc&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });

        it('Generates the correct URL with state provided', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
            }
          );

          var expectedUrl = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=123abc&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });
      });

      describe('for Express account', function() {
        it('Generates the correct URL', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
            },
            {
              express: true,
            }
          );

          var expectedUrl = 'https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=123abc&scope=read_write';

          expect(url).to.equal(expectedUrl);
        });

        it('Generates the correct URL with state provided', function() {
          var url = stripe.oAuth.authorizeUrl(
            {
              response_type: 'code',
              client_id: '123abc',
              scope: 'read_write',
              state: 'some_state',
            },
            {
              express: true,
            }
          );

          var expectedUrl = 'https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=123abc&scope=read_write&state=some_state';

          expect(url).to.equal(expectedUrl);
        });
      });
    });
  });

  describe('token', function() {
    it('Sends the correct request', function() {
      stripe.oAuth.token({
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
