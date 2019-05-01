'use strict';

var utils = require('../testUtils');
var uuid = require('uuid/v4');

var nock = require('nock');

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('StripeResource', function() {
  describe('createResourcePathWithSymbols', function() {
    it('Generates a path', function() {
      stripe.invoices.create({});
      var path = stripe.invoices.createResourcePathWithSymbols('{id}');
      expect(path).to.equal('/invoices/{id}');
    });
  });

  describe('_defaultHeaders', function() {
    it('sets the Authorization header with Bearer auth using the global API key', function() {
      var headers = stripe.invoices._defaultHeaders(null, 0, null);
      expect(headers.Authorization).to.equal('Bearer fakeAuthToken');
    });
    it('sets the Authorization header with Bearer auth using the specified API key', function() {
      var headers = stripe.invoices._defaultHeaders('anotherFakeAuthToken', 0, null);
      expect(headers.Authorization).to.equal('Bearer anotherFakeAuthToken');
    });
    it('sets the Stripe-Version header if an API version is provided', function() {
      var headers = stripe.invoices._defaultHeaders(null, 0, '1970-01-01');
      expect(headers['Stripe-Version']).to.equal('1970-01-01');
    });
    it('does not the set the Stripe-Version header if no API version is provided', function() {
      var headers = stripe.invoices._defaultHeaders(null, 0, null);
      expect(headers).to.not.include.keys('Stripe-Version');
    });
  });

  describe('Parameter encoding', function() {
    // Use a real instance of stripe as we're mocking the http.request responses.
    var realStripe = require('../lib/stripe')(utils.getUserStripeKey());

    after(function() {
      nock.cleanAll();
    })

    describe('_request', function() {
      it('encodes the query string in GET requests', function(done) {
        var options = {
          host: stripe.getConstant('DEFAULT_HOST'),
          path: '/v1/invoices/upcoming',
          data: {
            subscription_items: [
              {plan: 'foo', quantity: 2},
              {id: 'si_123', deleted: true},
            ],
          },
        };

        const scope = nock('https://' + options.host)
          .get(options.path)
          .query(Object.assign({customer: 'cus_123'}, options.data))
          .reply(200, '{}');

        realStripe.invoices.retrieveUpcoming('cus_123', options.data, function(err, response) {
          done();
          scope.done();
        });
      });

      it('encodes the body in POST requests', function(done) {
        var options = {
          host: stripe.getConstant('DEFAULT_HOST'),
          path: '/v1/subscriptions/sub_123',
          data: {
            customer: 'cus_123',
            items: [
              {plan: 'foo', quantity: 2},
              {id: 'si_123', deleted: true},
            ],
          },
          body: 'customer=cus_123&items[0][plan]=foo&items[0][quantity]=2&items[1][id]=si_123&items[1][deleted]=true',
        };

        const scope = nock('https://' + options.host)
          .post(options.path, options.body)
          .reply(200, '{}');

        realStripe.subscriptions.update('sub_123', options.data, function(err, response) {
          done();
          scope.done();
        });
      });
    });
  });

  describe('Retry Network Requests', function() {
    // Use a real instance of stripe as we're mocking the http.request responses.
    var realStripe = require('../lib/stripe')(utils.getUserStripeKey());

    // Override the sleep timer to speed up tests
    realStripe.charges._getSleepTimeInMS = function() {
      return 0;
    };

    var options = {
      host: stripe.getConstant('DEFAULT_HOST'),
      path: '/v1/charges',
      data: {
        amount: 1000,
        currency: 'usd',
        source: 'tok_visa',
        description: 'test'
      },
      params: 'amount=1000&currency=usd&source=tok_visa&description=test'
    };

    afterEach(function() {
      realStripe.setMaxNetworkRetries(0);
      stripe.setMaxNetworkRetries(0);
    });

    after(function() {
      nock.cleanAll();
    })

    describe('_request', function() {
      it('throws an error on connection failure', function(done) {
        // Mock the connection error.
        nock('https://' + options.host)
          .post(options.path, options.params)
          .replyWithError('bad stuff');

        realStripe.charges.create(options.data, function(err) {
          expect(err.detail.message).to.deep.equal('bad stuff');
          done();
        });
      });

      it('should retry the request if max retries are set', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .replyWithError('worse stuff');

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function(err) {
          var errorMessage = realStripe.invoices._generateConnectionErrorMessage(1);
          expect(err.message).to.equal(errorMessage);
          expect(err.detail.message).to.deep.equal('worse stuff');
          done();
        });
      });

      it('should stop retrying after a successful retry', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe.setMaxNetworkRetries(2);

        realStripe.charges.create(options.data, function(err, charge) {
          expect(charge.id).to.equal('ch_123');
          done();
        });
      });

      it('should retry on a 409 error', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .reply(409, {
            error: {
              message: 'Conflict'
            }
          })
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function(err, charge) {
          expect(charge.id).to.equal('ch_123');
          done();
        });
      });

      it('should not retry on a 400 error', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .reply(400, {
            error: {
              type: 'card_error'
            }
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function(err) {
          expect(err.type).to.equal('StripeCardError');
          done();
        });
      });

      it('should not retry on a 500 error when the method is POST', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .reply(500, {
            error: {
              type: 'api_error'
            }
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function(err) {
          expect(err.type).to.equal('StripeAPIError');
          done();
        });
      });

      it('should handle OAuth errors gracefully', function (done) {
        nock('https://connect.stripe.com')
          .post('/oauth/token')
          .reply(400, {
            error: 'invalid_grant',
            error_description: 'This authorization code has already been used. All tokens issued with this code have been revoked.'
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.oauth.token(options.data, function (err) {
          expect(err.type).to.equal('StripeInvalidGrantError');
          done();
        });
      });

      it('should retry on a 503 error when the method is POST', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .reply(503, {
            error: {
              message: 'Service unavailable'
            }
          })
          .post(options.path, options.params)
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function(err, charge) {
          expect(charge.id).to.equal('ch_123');
          done();
        });
      });

      it('should retry on a 500 error when the method is GET', function(done) {
        nock('https://' + options.host)
          .get(options.path + '/ch_123')
          .reply(500, {
            error: {
              type: 'api_error'
            }
          })
          .get(options.path + '/ch_123')
          .reply(200, {
            id: 'ch_123',
            object: 'charge',
            amount: 1000,
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.retrieve('ch_123', function(err, charge) {
          expect(charge.id).to.equal('ch_123');
          done();
        });
      });

      it('should add an idempotency key for retries using the POST method', function(done) {
        var headers;

        // Fail the first request but succeed on the 2nd.
        nock('https://' + options.host)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply(function(uri, requestBody, cb) {
            headers = this.req.headers;

            return cb(null, [200, {
              id: 'ch_123"',
              object: 'charge',
              amount: 1000,
            }]);
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function() {
          expect(headers).to.have.property('idempotency-key');
          done();
        });
      });

      it('should not add idempotency key for retries using the GET method', function(done) {
        var headers;

        nock('https://' + options.host)
          .get(options.path + '/ch_123')
          .replyWithError('bad stuff')
          .get(options.path + '/ch_123')
          .reply(function(uri, requestBody, cb) {
            headers = this.req.headers;

            return cb(null, [200, {
              id: 'ch_123"',
              object: 'charge',
              amount: 1000,
            }]);
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.retrieve('ch_123', function() {
          expect(headers).to.not.have.property('idempotency-key');
          done();
        });
      });

      it('should reuse the given idempotency key provided for retries', function(done) {
        var key = uuid();
        var headers;

        nock('https://' + options.host)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .reply(function(uri, requestBody, cb) {
            headers = this.req.headers;

            return cb(null, [200, {
              id: 'ch_123"',
              object: 'charge',
              amount: 1000,
            }]);
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, {idempotency_key: key}, function() {
          expect(headers['idempotency-key']).to.equal(key);
          done();
        });
      });
    });

    describe('_shouldRetry', function() {
      it('should return false if we\'ve reached maximum retries', function() {
        stripe.setMaxNetworkRetries(1);
        var res = stripe.invoices._shouldRetry({
          statusCode: 409
        }, 1);

        expect(res).to.equal(false);
      });

      it('should return true if we have more retries available', function() {
        stripe.setMaxNetworkRetries(1);
        var res = stripe.invoices._shouldRetry({
          statusCode: 409
        }, 0);

        expect(res).to.equal(true);
      });

      it('should return true if the error code is either 409 or 503', function() {
        stripe.setMaxNetworkRetries(1);
        var res = stripe.invoices._shouldRetry({
          statusCode: 409
        }, 0);

        expect(res).to.equal(true);

        res = stripe.invoices._shouldRetry({
          statusCode: 503
        }, 0);

        expect(res).to.equal(true);
      });

      it('should return false if the status is 200', function() {
        stripe.setMaxNetworkRetries(2);

        // mocking that we're on our 2nd request
        var res = stripe.invoices._shouldRetry({
          statusCode: 200,
          req: {_requestEvent: {method: 'POST'}}
        }, 1);

        expect(res).to.equal(false);
      });
    });

    describe('_getSleepTimeInMS', function() {
      it('should not exceed the maximum or minimum values', function() {
        var sleepSeconds;
        var max = stripe.getMaxNetworkRetryDelay();
        var min = stripe.getInitialNetworkRetryDelay();

        for (var i = 0; i < 10; i++) {
          sleepSeconds = stripe.invoices._getSleepTimeInMS(i) / 1000;

          expect(sleepSeconds).to.be.at.most(max);
          expect(sleepSeconds).to.be.at.least(min);
        }
      });
    });
  });
});
