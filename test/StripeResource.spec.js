'use strict';

const utils = require('../testUtils');

const nock = require('nock');

const stripe = require('../testUtils').getSpyableStripe();
const expect = require('chai').expect;
const StripeResource = require('../lib/StripeResource');

describe('StripeResource', () => {
  describe('_sendRequest', () => {
    it('works', (callback) => {
      const resource = new StripeResource({
        getTelemetryEnabled: () => false,
        getApiField: (name) => {
          return {basePath: ''}[name];
        },
        _emitter: {
          emit: () => {},
        },
        getMaxNetworkRetries: () => 2,
        _httpClient: {
          request: (opts, callback) => {
            callback({
              isConnectionError: () => false,
              isTimeoutError: () => false,
              getStatusCode: () => 200,
              getBody: () => '{"id": "xyz"}',
              getRawResponse: () => ({}),
              getHeaders: () => ({}),
            });
          },
        },
      });

      resource._sendRequest(
        'get',
        'localhost',
        3000,
        '/v1/foo',
        null,
        'latest',
        {},
        100,
        {},
        (err, result) => {
          if (err) {
            return callback(err);
          }
          expect(result).to.deep.equal({id: 'xyz'});
          return callback();
        }
      );
    });
  });
  describe('createResourcePathWithSymbols', () => {
    it('Generates a path', () => {
      stripe.invoices.create({});
      const path = stripe.invoices.createResourcePathWithSymbols('{id}');
      expect(path).to.equal('/invoices/{id}');
    });
  });

  describe('_makeHeaders', () => {
    it('sets the Authorization header with Bearer auth using the global API key', () => {
      const headers = stripe.invoices._makeHeaders(null, 0, null);
      expect(headers.Authorization).to.equal('Bearer fakeAuthToken');
    });
    it('sets the Authorization header with Bearer auth using the specified API key', () => {
      const headers = stripe.invoices._makeHeaders(
        'anotherFakeAuthToken',
        0,
        null
      );
      expect(headers.Authorization).to.equal('Bearer anotherFakeAuthToken');
    });
    it('sets the Stripe-Version header if an API version is provided', () => {
      const headers = stripe.invoices._makeHeaders(null, 0, '1970-01-01');
      expect(headers['Stripe-Version']).to.equal('1970-01-01');
    });
    it('does not the set the Stripe-Version header if no API version is provided', () => {
      const headers = stripe.invoices._makeHeaders(null, 0, null);
      expect(headers).to.not.include.keys('Stripe-Version');
    });
  });

  describe('Parameter encoding', () => {
    // Use a real instance of stripe as we're mocking the http.request responses.
    const realStripe = require('../lib/stripe')(utils.getUserStripeKey());

    after(() => {
      nock.cleanAll();
    });

    describe('_request', () => {
      it('encodes data for GET requests as query params', (done) => {
        const data = {
          customer: 'cus_123',
          subscription_items: [
            {plan: 'foo', quantity: 2},
            {id: 'si_123', deleted: true},
          ],
        };
        const options = {
          host: stripe.getConstant('DEFAULT_HOST'),
          path: '/v1/invoices/upcoming',
          data,
        };

        const scope = nock(`https://${options.host}`)
          .get(
            `${options.path}?customer=cus_123&subscription_items[0][plan]=foo&subscription_items[0][quantity]=2&subscription_items[1][id]=si_123&subscription_items[1][deleted]=true`,
            ''
          )
          .reply(200, '{}');

        realStripe.invoices.retrieveUpcoming(options.data, (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('works correctly with undefined optional arguments', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          .get('/v1/accounts/acct_123')
          .reply(200, '{}');

        realStripe.accounts.retrieve('acct_123', undefined, (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('works correctly with null optional arguments', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          .get('/v1/accounts/acct_123')
          .reply(200, '{}');

        realStripe.accounts.retrieve('acct_123', null, (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('encodes data for DELETE requests as query params', (done) => {
        const data = {
          foo: 'bar',
        };
        const host = stripe.getConstant('DEFAULT_HOST');

        const scope = nock(`https://${host}`)
          .delete(/.*/)
          .reply(200, '{}');

        realStripe.invoiceItems.del('invoiceItemId1', data, (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('encodes the body in POST requests', (done) => {
        const options = {
          host: stripe.getConstant('DEFAULT_HOST'),
          path: '/v1/subscriptions/sub_123',
          data: {
            customer: 'cus_123',
            items: [
              {plan: 'foo', quantity: 2},
              {id: 'si_123', deleted: true},
            ],
          },
          body:
            'customer=cus_123&items[0][plan]=foo&items[0][quantity]=2&items[1][id]=si_123&items[1][deleted]=true',
        };

        const scope = nock(`https://${options.host}`)
          .post(options.path, options.body)
          .reply(200, '{}');

        realStripe.subscriptions.update(
          'sub_123',
          options.data,
          (err, response) => {
            done(err);
            scope.done();
          }
        );
      });
    });
  });

  describe('Retry Network Requests', () => {
    // Use a real instance of stripe as we're mocking the http.request responses.
    const realStripe = require('../lib/stripe')(utils.getUserStripeKey());

    const _initialNetworkRetryDelayMs =
      realStripe._httpClient._initialNetworkRetryDelayMs;
    before(() => {
      // Override the sleep timer to speed up tests
      realStripe._httpClient._initialNetworkRetryDelayMs = 0;
    });
    after(() => {
      realStripe._httpClient._initialNetworkRetryDelayMs = _initialNetworkRetryDelayMs;
    });

    const options = {
      host: stripe.getConstant('DEFAULT_HOST'),
      path: '/v1/charges',
      data: {
        amount: 1000,
        currency: 'usd',
        source: 'tok_visa',
        description: 'test',
      },
      params: 'amount=1000&currency=usd&source=tok_visa&description=test',
    };

    afterEach(() => {
      realStripe._setApiNumberField('maxNetworkRetries', 0);
      stripe._setApiNumberField('maxNetworkRetries', 0);
    });

    after(() => {
      nock.cleanAll();
    });

    describe('_request', () => {
      it('throws an error on connection failure', (done) => {
        // Mock the connection error.
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError('bad stuff');

        realStripe.charges.create(options.data, (err) => {
          expect(err.detail.message).to.deep.equal('bad stuff');
          done();
        });
      });

      it('should retry the request if max retries are set', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .replyWithError('worse stuff');

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(options.data, (err) => {
          const errorMessage = realStripe.invoices._generateConnectionErrorMessage(
            1
          );
          expect(err.message).to.equal(errorMessage);
          expect(err.detail.message).to.deep.equal('worse stuff');
          done();
        });
      });

      it('should stop retrying after a successful retry', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe._setApiNumberField('maxNetworkRetries', 2);

        realStripe.charges.create(options.data, (err, charge) => {
          expect(charge.id).to.equal('ch_123');
          done(err);
        });
      });

      it('should retry on a 409 error', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(409, {
            error: {
              message: 'Conflict',
            },
          })
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(options.data, (err, charge) => {
          expect(charge.id).to.equal('ch_123');
          done(err);
        });
      });

      it('should not retry on a 400 error', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(400, {
            error: {
              type: 'card_error',
            },
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(options.data, (err) => {
          expect(err.type).to.equal('StripeCardError');
          done();
        });
      });

      it('should not retry when a header says not to', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(
            500,
            {
              error: {
                type: 'api_error',
              },
            },
            {'stripe-should-retry': 'false'}
          );

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(options.data, (err) => {
          expect(err.type).to.equal('StripeAPIError');
          done();
        });
      });

      it('should retry when a header says it should, even on status codes we ordinarily wouldnt', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(
            400,
            {error: {type: 'your_fault'}},
            {'stripe-should-retry': 'true'}
          )
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(options.data, (err, charge) => {
          expect(charge.id).to.equal('ch_123');
          done(err);
        });
      });

      it('should handle OAuth errors gracefully', (done) => {
        nock('https://connect.stripe.com')
          .post('/oauth/token')
          .reply(400, {
            error: 'invalid_grant',
            error_description:
              'This authorization code has already been used. All tokens issued with this code have been revoked.',
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.oauth.token(options.data, (err) => {
          expect(err.type).to.equal('StripeInvalidGrantError');
          done();
        });
      });

      it('should retry on a 503 error when the method is POST', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(503, {
            error: {
              message: 'Service unavailable',
            },
          })
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(options.data, (err, charge) => {
          expect(charge.id).to.equal('ch_123');
          done(err);
        });
      });

      it('should retry on a 500 error when the method is GET', (done) => {
        nock(`https://${options.host}`)
          .get(`${options.path}/ch_123`)
          .reply(500, {
            error: {
              type: 'api_error',
            },
          })
          .get(`${options.path}/ch_123`)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.retrieve('ch_123', (err, charge) => {
          expect(charge.id).to.equal('ch_123');
          done(err);
        });
      });

      it('should add an idempotency key for retries using the POST method', (done) => {
        let headers;

        // Fail the first request but succeed on the 2nd.
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply(function(uri, requestBody, cb) {
            headers = this.req.headers;

            return cb(null, [
              200,
              {
                id: 'ch_123',
                object: 'charge',
                amount: 1000,
              },
            ]);
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(options.data, (err) => {
          expect(headers).to.have.property('idempotency-key');
          done(err);
        });
      });

      it('should not add idempotency key for retries using the GET method', (done) => {
        let headers;

        nock(`https://${options.host}`)
          .get(`${options.path}/ch_123`)
          .replyWithError('bad stuff')
          .get(`${options.path}/ch_123`)
          .reply(function(uri, requestBody, cb) {
            headers = this.req.headers;

            return cb(null, [
              200,
              {
                id: 'ch_123',
                object: 'charge',
                amount: 1000,
              },
            ]);
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.retrieve('ch_123', () => {
          expect(headers).to.not.have.property('idempotency-key');
          done();
        });
      });

      it('should reuse the given idempotency key provided for retries', (done) => {
        const key = 'i-am-a-key';
        let headers;

        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply(function(uri, requestBody, cb) {
            headers = this.req.headers;

            return cb(null, [
              200,
              {
                id: 'ch_123',
                object: 'charge',
                amount: 1000,
              },
            ]);
          });

        realStripe.charges.create(
          options.data,
          {idempotencyKey: key, maxNetworkRetries: 1},
          () => {
            expect(headers['idempotency-key']).to.equal(key);
            done();
          }
        );
      });

      it('should allow the setting of network retries on a per-request basis', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply((uri, requestBody, cb) => {
            return cb(null, [
              200,
              {
                id: 'ch_123',
                object: 'charge',
                amount: 1000,
              },
            ]);
          });

        realStripe.charges.create(
          options.data,
          {maxNetworkRetries: 1},
          (err, charge) => {
            expect(charge.id).to.equal('ch_123');
            done();
          }
        );
      });

      it('should pick the per-request network retry setting if a global setting is set', (done) => {
        realStripe._setApiNumberField('maxNetworkRetries', 0);

        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply((uri, requestBody, cb) => {
            return cb(null, [
              200,
              {
                id: 'ch_123',
                object: 'charge',
                amount: 1000,
              },
            ]);
          });

        realStripe.charges.create(
          options.data,
          {maxNetworkRetries: 1},
          (err, charge) => {
            expect(charge.id).to.equal('ch_123');
            done();
          }
        );
      });
    });

    describe('_shouldRetry', () => {
      let res;
      beforeEach(() => {
        res = {
          isConnectionError: () => false,
          getRetryHeader: () => null,
          getStatusCode: () => {},
        };
      });
      it('should return true if the error code is either 409 or 503', () => {
        res.getStatusCode = () => 409;
        expect(stripe.invoices._shouldRetry(res)).to.equal(true);

        res.getStatusCode = () => 503;
        expect(stripe.invoices._shouldRetry(res)).to.equal(true);
      });

      it('should return false if the status is 200', () => {
        res.getStatusCode = () => 200;
        expect(stripe.invoices._shouldRetry(res)).to.equal(false);
      });
    });
  });

  describe('Request Timeout', () => {
    it('should allow the setting of a request timeout on a per-request basis', (done) => {
      stripe.setTimeout(1000);

      stripe.charges.create({});

      expect(stripe.LAST_REQUEST.settings).to.deep.equal({});

      stripe.charges.create({}, {timeout: 10});

      expect(stripe.LAST_REQUEST.settings).to.deep.equal({
        timeout: 10,
      });
      done();
    });
  });
});
