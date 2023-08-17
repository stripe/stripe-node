// @ts-nocheck
import {expect} from 'chai';
import {
  StripeAuthenticationError,
  StripeConnectionError,
  StripeError,
  StripeIdempotencyError,
  StripePermissionError,
  StripeRateLimitError,
} from '../src/Error.js';
import {HttpClientResponse} from '../src/net/HttpClient.js';
import {RequestSender} from '../src/RequestSender.js';
import {
  FAKE_API_KEY,
  getSpyableStripe,
  getTestServerStripe,
} from './testUtils.js';
import nock = require('nock');

const stripe = getSpyableStripe();

describe('RequestSender', () => {
  const sender = new RequestSender(stripe, 0);

  describe('_makeHeaders', () => {
    it('sets the Authorization header with Bearer auth using the global API key', () => {
      const headers = sender._makeHeaders(null, 0, null);
      expect(headers.Authorization).to.equal(`Bearer ${FAKE_API_KEY}`);
    });
    it('sets the Authorization header with Bearer auth using the specified API key', () => {
      const headers = sender._makeHeaders('anotherFakeAuthToken', 0, null);
      expect(headers.Authorization).to.equal('Bearer anotherFakeAuthToken');
    });
    it('sets the Stripe-Version header if an API version is provided', () => {
      const headers = sender._makeHeaders(null, 0, '1970-01-01');
      expect(headers['Stripe-Version']).to.equal('1970-01-01');
    });
    it('does not the set the Stripe-Version header if no API version is provided', () => {
      const headers = sender._makeHeaders(null, 0, null);
      expect(headers).to.not.include.keys('Stripe-Version');
    });
  });

  describe('_shouldRetry', () => {
    it("should return false if we've reached maximum retries", () => {
      const res = RequestSender._shouldRetry(
        new HttpClientResponse(409, {}),
        1,
        1
      );

      expect(res).to.equal(false);
    });

    it('should return true if we have more retries available', () => {
      const res = RequestSender._shouldRetry(
        new HttpClientResponse(409, {}),
        0,
        1
      );

      expect(res).to.equal(true);
    });

    it('should return true if the error code is either 409 or 503', () => {
      let res = RequestSender._shouldRetry(
        new HttpClientResponse(409, {}),
        0,
        1
      );

      expect(res).to.equal(true);

      res = RequestSender._shouldRetry(new HttpClientResponse(503, {}), 0, 1);

      expect(res).to.equal(true);
    });

    it('should return false if the status is 200', () => {
      // mocking that we're on our 2nd request
      const res = RequestSender._shouldRetry(
        new HttpClientResponse(200, {}),
        1,
        2
      );

      expect(res).to.equal(false);
    });
  });

  describe('Parameter encoding', () => {
    // Use a real instance of stripe as we're mocking the http.request responses.
    const realStripe = require('../src/stripe.cjs.node.js')('sk_test_xyz');

    afterEach(() => {
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

        const scope = nock(
          `https://${options.host}`,
          // No Content-Length should be present for GET requests.
          {
            badheaders: ['Content-Length'],
          }
        )
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

      it('handles . as a query param', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          .get('/v1/customers/.', '')
          .reply(200, '{}');

        realStripe.customers.retrieve('.', (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('handles .. as a query param', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          .get('/v1/customers/..', '')
          .reply(200, '{}');

        realStripe.customers.retrieve('..', (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('handles empty string as a query param', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          // Note this should always have a trailing space to avoid calling the
          // top level list endpoint (/v1/customers) and returning all customers.
          .get('/v1/customers/', '')
          .reply(200, '{}');

        realStripe.customers.retrieve('', (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('handles empty string as a query param for namespaced resources', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          // Note this should always have a trailing space to avoid calling the
          // top level list endpoint (/v1/customers) and returning all customers.
          .get('/v1/checkout/sessions/', '')
          .reply(200, '{}');

        realStripe.checkout.sessions.retrieve('', (err, response) => {
          done(err);
          scope.done();
        });
      });

      it('handles empty string as a query param for nested resources', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          // Note this should always have a trailing space to avoid calling the
          // top level list endpoint (/v1/customers) and returning all customers.
          .get('/v1/customers/cus_123/balance_transactions/', '')
          .reply(200, '{}');

        realStripe.customers.retrieveBalanceTransaction(
          'cus_123',
          '',
          (err, response) => {
            done(err);
            scope.done();
          }
        );
      });

      it('does not include trailing slash for endpoints without query parameters', (done) => {
        const scope = nock(`https://${stripe.getConstant('DEFAULT_HOST')}`)
          // Note that no trailing slash is present.
          .get('/v1/customers', '')
          .reply(200, '{}');

        realStripe.customers.list((err, response) => {
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

        const scope = nock(
          `https://${host}`,
          // No Content-Length should be present for DELETE requests.
          {
            badheaders: ['Content-Length'],
          }
        )
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

        const scope = nock(
          `https://${options.host}`,
          // Content-Length should be present for POST.
          {
            reqheaders: {'Content-Length': options.body.length},
          }
        )
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

      it('always includes Content-Length in POST requests even when empty', (done) => {
        const options = {
          host: stripe.getConstant('DEFAULT_HOST'),
          path: '/v1/subscriptions/sub_123',
          data: {},
          body: '',
        };

        const scope = nock(
          `https://${options.host}`,
          // Content-Length should be present for POST even when the body is
          // empty.
          {
            reqheaders: {'Content-Length': 0},
          }
        )
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

      it('allows overriding host', (done) => {
        const scope = nock('https://myhost')
          .get('/v1/accounts/acct_123')
          .reply(200, '{}');

        realStripe.accounts.retrieve(
          'acct_123',
          {},
          {
            host: 'myhost',
          },
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
    const realStripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
      maxNetworkRetries: 0,
    });

    // Override the sleep timer to speed up tests
    realStripe.charges._getSleepTimeInMS = () => 0;

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

      it('throws an error on connection timeout', (done) => {
        return getTestServerStripe(
          {timeout: 10, maxNetworkRetries: 0},
          (req, res) => {
            // Do nothing. This will trigger a timeout.
          },
          (err, stripe, closeServer) => {
            if (err) {
              return done(err);
            }
            stripe.charges.create(options.data, (err, result) => {
              expect(err.detail.message).to.deep.equal('ETIMEDOUT');
              expect(err.message).to.deep.equal(
                'Request aborted due to timeout being reached (10ms)'
              );
              closeServer();
              done();
            });
          }
        );
      });

      it('throws an error on invalid JSON', (done) => {
        return getTestServerStripe(
          {},
          (req, res) => {
            // Write back JSON to close out the server.
            res.write('invalidjson{}');
            res.end();
          },
          (err, stripe, closeServer) => {
            if (err) {
              return done(err);
            }
            stripe.charges.create(options.data, (err, result) => {
              expect(err.message).to.deep.equal(
                'Invalid JSON received from the Stripe API'
              );
              closeServer();
              done();
            });
          }
        );
      });
      it('throws an valid headers but connection error', (done) => {
        return getTestServerStripe(
          {},
          (req, res) => {
            // Send out valid headers and a partial response. We then interrupt
            // the response with an error.
            res.writeHead(200);
            res.write('{"ab');
            res.destroy(new Error('something happened'));
          },
          (err, stripe, closeServer) => {
            if (err) {
              return done(err);
            }
            stripe.charges.create(options.data, (err, result) => {
              expect(err).to.be.an.instanceOf(StripeConnectionError);
              done();
            });
          }
        );
      });

      it('throws a StripeAuthenticationError on 401', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(401, {
            error: {
              message: 'message',
            },
          });

        realStripe.charges.create(options.data, (err) => {
          expect(err).to.be.an.instanceOf(StripeAuthenticationError);
          expect(err.message).to.be.equal('message');
          done();
        });
      });

      it('throws a StripePermissionError on 403', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(403, {
            error: {
              message: 'message',
            },
          });

        realStripe.charges.create(options.data, (err) => {
          expect(err).to.be.an.instanceOf(StripePermissionError);
          expect(err.message).to.be.equal('message');
          done();
        });
      });

      it('throws a StripeRateLimitError on 429', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(429, {
            error: {
              message: 'message',
            },
          });

        realStripe.charges.create(options.data, (err) => {
          expect(err).to.be.an.instanceOf(StripeRateLimitError);
          expect(err.message).to.be.equal('message');
          done();
        });
      });

      it('throws a StripeError based on the underlying error type', (done) => {
        const error = {
          type: 'idempotency_error',
        };

        expect(StripeError.generate(error)).to.be.an.instanceOf(
          StripeIdempotencyError
        );

        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply(400, {
            error,
          });

        realStripe.charges.create(options.data, (err) => {
          expect(err).to.be.an.instanceOf(StripeIdempotencyError);
          done();
        });
      });

      it('retries connection timeout errors', (done) => {
        let nRequestsReceived = 0;
        return getTestServerStripe(
          {timeout: 10, maxNetworkRetries: 2},
          (req, res) => {
            nRequestsReceived += 1;
            // Do nothing. This will trigger a timeout.
            return {shouldStayOpen: nRequestsReceived < 3};
          },
          (err, stripe, closeServer) => {
            if (err) {
              return done(err);
            }
            stripe.charges.create(options.data, (err, result) => {
              expect(err.detail.message).to.deep.equal('ETIMEDOUT');
              expect(nRequestsReceived).to.equal(3);
              closeServer();
              done();
            });
          }
        );
      });

      it('retries closed connection errors once', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError({
            code: 'ECONNRESET',
            errno: 'ECONNRESET',
          })
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe.charges.create(options.data, (err, charge) => {
          expect(charge.id).to.equal('ch_123');
          done(err);
        });
      });

      it('throws on multiple closed connection errors', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .replyWithError({code: 'ECONNRESET'})
          .post(options.path, options.params)
          .replyWithError({code: 'ECONNRESET'});

        realStripe.charges.create(options.data, (err) => {
          expect(err.detail.code).to.deep.equal('ECONNRESET');
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
          const errorMessage = RequestSender._generateConnectionErrorMessage(1);
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

      it('should give precedence to request-level (1) vs client-level maxNetworkRetries (0)', (done) => {
        let nReceivedRequests = 0;
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply((_1, _2, callback) => {
            nReceivedRequests += 1;
            callback(new Error('bad stuff'));
          })
          .post(options.path, options.params)
          .reply((_1, _2, callback) => {
            nReceivedRequests += 1;
            callback(new Error('worse stuff'));
          });

        realStripe._setApiNumberField('maxNetworkRetries', 0);

        realStripe.charges.create(
          options.data,
          {maxNetworkRetries: 1},
          (err) => {
            const errorMessage = RequestSender._generateConnectionErrorMessage(
              1
            );
            expect(err.message).to.equal(errorMessage);
            expect(err.detail.message).to.deep.equal('worse stuff');
            expect(nReceivedRequests).to.equal(2);
            done();
          }
        );
      });

      it('should give precedence to request-level (0) vs client-level maxNetworkRetries (1)', (done) => {
        nock(`https://${options.host}`)
          .post(options.path, options.params)
          .reply((_1, _2, callback) => {
            callback(new Error('bad stuff'));
          });

        realStripe._setApiNumberField('maxNetworkRetries', 1);

        realStripe.charges.create(
          options.data,
          {maxNetworkRetries: 0},
          (err) => {
            expect(err.detail.message).to.deep.equal('bad stuff');
            const errorMessage = RequestSender._generateConnectionErrorMessage(
              0
            );
            expect(err.message).to.equal(errorMessage);
            done();
          }
        );
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

      it('invokes the callback with successful results', (done) => {
        const returnedCharge = {
          id: 'ch_123',
        };
        return getTestServerStripe(
          {},
          (req, res) => {
            res.write(JSON.stringify(returnedCharge));
            res.end();
          },
          (err, stripe, closeServer) => {
            if (err) {
              return done(err);
            }
            stripe.charges.create(options.data, (err, result) => {
              expect(result).to.deep.equal(returnedCharge);
              closeServer();
              done();
            });
          }
        );
      });

      it('returns successful results to await', (done) => {
        const returnedCharge = {
          id: 'ch_123',
        };
        return getTestServerStripe(
          {},
          (req, res) => {
            res.write(JSON.stringify(returnedCharge));
            res.end();
          },
          async (err, stripe, closeServer) => {
            if (err) {
              return done(err);
            }
            try {
              const result = await stripe.charges.create(options.data);
              expect(result).to.deep.equal(returnedCharge);
              closeServer();
              done();
            } catch (err) {
              done(err);
            }
          }
        );
      });
    });

    describe('_getSleepTimeInMS', () => {
      it('should not exceed the maximum or minimum values', () => {
        const max = stripe.getMaxNetworkRetryDelay();
        const min = stripe.getInitialNetworkRetryDelay();

        for (let i = 0; i < 10; i++) {
          const sleepSeconds = sender._getSleepTimeInMS(i) / 1000;

          expect(sleepSeconds).to.be.at.most(max);
          expect(sleepSeconds).to.be.at.least(min);
        }
      });

      it('should allow a maximum override', () => {
        const maxSec = stripe.getMaxNetworkRetryDelay();
        const minMS = stripe.getInitialNetworkRetryDelay() * 1000;

        expect(sender._getSleepTimeInMS(3, 0)).to.be.gt(minMS);
        expect(sender._getSleepTimeInMS(2, 3)).to.equal(3000);
        expect(sender._getSleepTimeInMS(0, 3)).to.equal(3000);
        expect(sender._getSleepTimeInMS(0, 0)).to.equal(minMS);
        expect(sender._getSleepTimeInMS(0, maxSec * 2)).to.equal(
          maxSec * 2 * 1000
        );
      });
    });
  });

  describe('Request Timeout', () => {
    it('should allow the setting of a request timeout on a per-request basis', (done) => {
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
