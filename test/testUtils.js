'use strict';

// NOTE: testUtils should be imported before anything else in each spec file!

import mocha from 'mocha';
// Ensure we are using the 'as promised' libs before any tests are run:
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import http from 'http';

import {CryptoProvider} from '../lib/crypto/CryptoProvider.js';
import {
  NodePlatformFunctions,
} from '../lib/platform/NodePlatformFunctions.js';
import {RequestSender} from '../lib/RequestSender.js';
import {createStripe} from '../lib/stripe.common.js';
import Stripe from '../lib/stripe.node.js';

const testingHttpAgent = new http.Agent({keepAlive: false});

const utils = {
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
      const stripe = Stripe(
        utils.getUserStripeKey(),
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
    return Stripe('sk_test_123', {
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
    const stripeFactory = createStripe(
      new NodePlatformFunctions(),
      (stripeInstance) =>
        new MockRequestSender(
          stripeInstance,
          Stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS
        )
    );
    return stripeFactory('fakeAuthToken', config);
  },

  createMockClient: (requests) => {
    return utils.getMockStripe(
      {},
      (method, host, path, _4, _5, _6, callback) => {
        const request = requests.find(
          (r) => r.method == method && r.path == path
        );
        if (!request) {
          throw new Error(
            `Unable to find a mock request for ${method} ${path}`
          );
        }

        callback(null, Promise.resolve(JSON.parse(request.response)));
      }
    );
  },

  getSpyableStripe: (config)  => {
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
    const stripeInstance = Stripe('fakeAuthToken', config);

    stripeInstance.REQUESTS = [];

    stripeInstance._requestSender = new SpyableRequestSender(
      stripeInstance,
      Stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS
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
      this._stripe = Stripe(
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

  FakeCryptoProvider: class extends CryptoProvider {
    computeHMACSignature(payload, secret) {
      return 'fake signature';
    }

    computeHMACSignatureAsync(payload, secret) {
      return Promise.resolve('fake signature');
    }
  },
};

export default utils;
