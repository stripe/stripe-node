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

  describe('Retry Network Requests', function() {
    // Use a real instance of stripe as we're mocking the http.request responses.
    var realStripe = require('../lib/stripe')(utils.getUserStripeKey());
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

      it('should retry the connection if max retries are set', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .replyWithError('bad stuff')
          .post(options.path, options.params)
          .replyWithError('worse stuff');

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function(err) {
          var errorMessage = realStripe.invoices._generateConnectionErrorMessage(1);
          expect(err.message).to.equal(errorMessage);
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

      it('should retry on rate limit error', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .reply(429, {
            error: {
              message: 'Rate limited'
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
              message: 'You goofed'
            }
          });

        realStripe.setMaxNetworkRetries(1);

        realStripe.charges.create(options.data, function(err) {
          expect(err).to.not.be.null;
          done();
        });
      });

      it('should not retry on a 500 error', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.params)
          .reply(500, {
            error: {
              message: 'We goofed'
            }
          });

        realStripe.charges.create(options.data, function(err) {
          expect(err).to.not.be.null;
          done();
        });
      })

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
        var res = stripe.invoices._shouldRetry({
          statusCode: 429
        }, 0);

        expect(res).to.equal(false);
      });

      it('should return true if we have more retries available', function() {
        stripe.setMaxNetworkRetries(1);
        var res = stripe.invoices._shouldRetry({
          statusCode: 429
        }, 0);

        expect(res).to.equal(true);
      });

      it('should return true if the error code is either 409 or 429', function() {
        stripe.setMaxNetworkRetries(1);
        var res = stripe.invoices._shouldRetry({
          statusCode: 409
        }, 0);

        expect(res).to.equal(true);

        res = stripe.invoices._shouldRetry({
          statusCode: 429
        }, 0);

        expect(res).to.equal(true);
      });

      it('should return false if the status is 200', function() {
        stripe.setMaxNetworkRetries(2);

        // mocking that we're on our 2nd request
        var res = stripe.invoices._shouldRetry({
          statusCode: 200
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
