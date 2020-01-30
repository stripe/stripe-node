'use strict';

// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');
// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

const ResourceNamespace = require('../lib/ResourceNamespace').ResourceNamespace;

const utils = (module.exports = {
  getUserStripeKey: () => {
    const key =
      process.env.STRIPE_TEST_API_KEY || 'tGN0bIwXnHdwOa85VABjPdSn8nWY7G7I';

    return key;
  },

  getSpyableStripe: () => {
    // Provide a testable stripe instance
    // That is, with mock-requests built in and hookable

    const stripe = require('../lib/stripe');
    const stripeInstance = stripe('fakeAuthToken');

    stripeInstance.REQUESTS = [];

    for (const i in stripeInstance) {
      makeInstanceSpyable(stripeInstance, stripeInstance[i]);
    }

    function makeInstanceSpyable(stripeInstance, thisInstance) {
      if (thisInstance instanceof stripe.StripeResource) {
        patchRequest(stripeInstance, thisInstance);
      } else if (thisInstance instanceof ResourceNamespace) {
        const namespace = thisInstance;

        for (const j in namespace) {
          makeInstanceSpyable(stripeInstance, namespace[j]);
        }
      }
    }

    function patchRequest(stripeInstance, instance) {
      instance._request = function(method, host, url, data, auth, options, cb) {
        const req = (stripeInstance.LAST_REQUEST = {
          method,
          url,
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
          cb.call(this, err, {});
        };

        if (this.requestDataProcessor) {
          this.requestDataProcessor(
            method,
            data,
            options.headers,
            handleMockRequest
          );
        } else {
          handleMockRequest(null, req);
        }
      };
    }

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

  envSupportsAwait: () => {
    try {
      eval('(async function() {})'); // eslint-disable-line no-eval
      return true;
    } catch (err) {
      return false;
    }
  },
});
