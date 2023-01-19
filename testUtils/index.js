'use strict';

// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');
// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

const http = require('http');

const CryptoProvider = require('../lib/crypto/CryptoProvider');
const NodePlatformFunctions = require('../lib/platform/NodePlatformFunctions');
const RequestSender = require('../lib/RequestSender');

const testingHttpAgent = new http.Agent({keepAlive: false});

const utils = (module.exports = {
  getTestServerStripe: (clientOptions, handler, callback) => {
    const server = http.createServer((req, res) => {
      const {shouldStayOpen} = handler(req, res) || {};
      if (!shouldStayOpen) {
        res.on('close', () => {
          server.close();
        });
      }
    });
    server.listen(0, () => {
      const {port} = server.address();
      const stripe = require('../lib/stripe')(
        module.exports.getUserStripeKey(),
        {
          host: 'localhost',
          port,
          protocol: 'http',
          httpAgent: testingHttpAgent,
          ...clientOptions,
        }
      );
      return callback(null, stripe, () => {
        server.close();
      });
    });
  },

  getStripeMockClient: () => {
    const stripe = require('../lib/stripe');

    return stripe('sk_test_123', {
      host: process.env.STRIPE_MOCK_HOST || 'localhost',
      port: process.env.STRIPE_MOCK_PORT || 12111,
      protocol: 'http',
    });
  },

  getUserStripeKey: () => {
    const key =
      process.env.STRIPE_TEST_API_KEY || 'tGN0bIwXnHdwOa85VABjPdSn8nWY7G7I';

    return key;
  },

  getMockPlatformFunctions: (cb) => {
    class MockPlatformFunctions extends NodePlatformFunctions {
      constructor(cb) {
        super();
        this._exec = cb;
      }
    }

    return new MockPlatformFunctions(cb);
  },

  getMockStripe: (config, request) => {
    class MockRequestSender extends RequestSender {
      _request(
        method,
        host,
        path,
        data,
        auth,
        options = {},
        callback,
        requestDataProcessor = null
      ) {
        return request(
          method,
          host,
          path,
          data,
          auth,
          options,
          callback,
          requestDataProcessor
        );
      }
    }

    // Provide a testable stripe instance
    // That is, with mock-requests built in and hookable
    const stripe = require('../lib/stripe');
    const stripeInstance = stripe('fakeAuthToken', config);

    stripeInstance._requestSender = new MockRequestSender(
      stripeInstance,
      stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS
    );

    return stripeInstance;
  },

  getSpyableStripe: (config) => {
    class SpyableRequestSender extends RequestSender {
      _request(
        method,
        host,
        path,
        data,
        auth,
        options = {},
        callback,
        requestDataProcessor = null
      ) {
        const req = (stripeInstance.LAST_REQUEST = {
          method,
          url: path,
          data,
          headers: options.headers || {},
          settings: options.settings || {},
        });
        if (auth) {
          req.auth = auth;
        }
        if (host) {
          req.host = host;
        }

        const handleMockRequest = (err, req) => {
          stripeInstance.REQUESTS.push(req);
          callback.call(this, err, {});
        };

        if (requestDataProcessor) {
          requestDataProcessor(
            method,
            data,
            options.headers,
            handleMockRequest
          );
        } else {
          handleMockRequest(null, req);
        }

        return super._request(
          method,
          host,
          path,
          data,
          auth,
          options,
          callback,
          requestDataProcessor
        );
      }
    }

    // Provide a testable stripe instance
    // That is, with mock-requests built in and hookable
    const stripe = require('../lib/stripe');
    const stripeInstance = stripe('fakeAuthToken', config);

    stripeInstance.REQUESTS = [];

    stripeInstance._requestSender = new SpyableRequestSender(
      stripeInstance,
      stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS
    );

    return stripeInstance;
  },

  /**
   * A utility where cleanup functions can be registered to be called post-spec.
   * CleanupUtility will automatically register on the mocha afterEach hook,
   * ensuring its called after each descendent-describe block.
   */
  CleanupUtility: (() => {
    CleanupUtility.DEFAULT_TIMEOUT = 20000;

    function CleanupUtility(timeout) {
      const self = this;
      this._cleanupFns = [];
      this._stripe = require('../lib/stripe')(
        utils.getUserStripeKey(),
        'latest'
      );
      afterEach(function(done) {
        this.timeout(timeout || CleanupUtility.DEFAULT_TIMEOUT);
        return self.doCleanup(done);
      });
    }

    CleanupUtility.prototype = {
      doCleanup(done) {
        const cleanups = this._cleanupFns;
        const total = cleanups.length;
        let completed = 0;
        let fn;
        while ((fn = cleanups.shift())) {
          const promise = fn.call(this);
          if (!promise || !promise.then) {
            throw new Error(
              'CleanupUtility expects cleanup functions to return promises!'
            );
          }
          promise.then(
            () => {
              // cleanup successful
              completed += 1;
              if (completed === total) {
                done();
              }
            },
            (err) => {
              // not successful
              throw err;
            }
          );
        }
        if (total === 0) {
          done();
        }
      },
      add(fn) {
        this._cleanupFns.push(fn);
      },
      deleteCustomer(custId) {
        this.add(function() {
          return this._stripe.customers.del(custId);
        });
      },
      deletePlan(pId) {
        this.add(function() {
          return this._stripe.plans.del(pId);
        });
      },
      deleteCoupon(cId) {
        this.add(function() {
          return this._stripe.coupons.del(cId);
        });
      },
      deleteInvoiceItem(iiId) {
        this.add(function() {
          return this._stripe.invoiceItems.del(iiId);
        });
      },
    };

    return CleanupUtility;
  })(),

  /**
   * Get a random string for test Object creation
   */
  getRandomString: () => {
    return Math.random()
      .toString(36)
      .slice(2);
  },

  envSupportsForAwait: () => {
    return typeof Symbol !== 'undefined' && Symbol.asyncIterator;
  },

  FakeCryptoProvider: class extends CryptoProvider {
    computeHMACSignature(payload, secret) {
      return 'fake signature';
    }

    computeHMACSignatureAsync(payload, secret) {
      return Promise.resolve('fake signature');
    }
  },
});
