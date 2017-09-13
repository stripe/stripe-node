

// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');
// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

var utils = module.exports = {

  getUserStripeKey() {
    const key = process.env.STRIPE_TEST_API_KEY || 'tGN0bIwXnHdwOa85VABjPdSn8nWY7G7I';

    return key;
  },

  getSpyableStripe() {
    // Provide a testable stripe instance
    // That is, with mock-requests built in and hookable

    const stripe = require('../lib/stripe');
    const stripeInstance = stripe('fakeAuthToken');

    stripeInstance.REQUESTS = [];

    Object.keys(stripeInstance).forEach((i) => {
      if (stripeInstance[i] instanceof stripe.StripeResource) {
        // Override each _request method so we can make the params
        // available to consuming tests (revealing requests made on
        // REQUESTS and LAST_REQUEST):
        stripeInstance[i].request = (method, url, data, auth, options, cb) => {
          const req = stripeInstance.LAST_REQUEST = {
            method,
            url,
            data,
            headers: options.headers || {},
          };
          if (auth) {
            req.auth = auth;
          }
          stripeInstance.REQUESTS.push(req);
          cb.call(this, null, {});
        };
      }
    });

    return stripeInstance;
  },

  /**
   * A utility where cleanup functions can be registered to be called post-spec.
   * CleanupUtility will automatically register on the mocha afterEach hook,
   * ensuring its called after each descendent-describe block.
   */
  CleanupUtility: (function CleanupUtility() {
    CleanupUtility.DEFAULT_TIMEOUT = 20000;

    function CleanupUtility(timeout) {
      const self = this;
      this.cleanupFns = [];
      this.stripe = require('../lib/stripe')(
        utils.getUserStripeKey(),
        'latest',
      );
      afterEach(function cleanup(done) {
        this.timeout(timeout || CleanupUtility.DEFAULT_TIMEOUT);
        return self.doCleanup(done);
      });
    }

    CleanupUtility.prototype = {

      doCleanup(done) {
        const cleanups = this.cleanupFns;
        const total = cleanups.length;
        let completed = 0;
        for (var fn; (fn = cleanups.shift());) {
          const promise = fn.call(this);
          if (!promise || !promise.then) {
            throw new Error('CleanupUtility expects cleanup functions to return promises!');
          }
          promise.then(() => {
            // cleanup successful
            completed += 1;
            if (completed === total) {
              done();
            }
          }, (err) => {
            // not successful
            throw err;
          });
        }
        if (total === 0) {
          done();
        }
      },
      add(fn) {
        this.cleanupFns.push(fn);
      },
      deleteCustomer(custId) {
        this.add(function deleteCustomer() {
          return this.stripe.customers.del(custId);
        });
      },
      deletePlan(pId) {
        this.add(function deletePlan() {
          return this.stripe.plans.del(pId);
        });
      },
      deleteCoupon(cId) {
        this.add(function deleteCoupon() {
          return this.stripe.coupons.del(cId);
        });
      },
      deleteInvoiceItem(iiId) {
        this.add(function deleteInvoiceItem() {
          return this.stripe.invoiceItems.del(iiId);
        });
      },
    };

    return CleanupUtility;
  }()),

  /**
  * Get a random string for test Object creation
  */
  getRandomString() {
    return Math.random().toString(36).slice(2);
  },

};
