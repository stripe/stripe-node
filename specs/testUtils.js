'use strict';

// testUtils should be require'd before anything else in each spec file!

// Ensure we are using the 'as promised' libs before any tests are run:
require('mocha-as-promised')();
require('chai').use(require('chai-as-promised'));

module.exports = {

  getUserStripeKey: function() {
    var key = process.env.STRIPE_TEST_API_KEY;

    if (!key) {
      throw new Error('Expected environment variable STRIPE_TEST_API_KEY to be set.');
    }

    if (!/^sk_test_/.test(key)) {
      throw new Error('Expected STRIPE_TEST_API_KEY to be of the form "sk_test_[...]".');
    }

    return key;
  },

  getSpyableStripe: function() {
    // Provide a testable stripe instance
    // That is, with mock-requests built in and hookable

    var Stripe = require('../lib/stripe');
    var stripeInstance = Stripe('fakeAuthToken');

    for (var i in stripeInstance) {
      if (stripeInstance[i] instanceof Stripe.StripeResource) {

        // Override each _request method so we can make the params
        // avaialable to consuming tests:
        stripeInstance[i]._request = function(method, url, data, cb) {
          stripeInstance.LAST_REQUEST = {
            method: method,
            url: url,
            data: data
          };
        };

      }
    }

    return stripeInstance;

  }

};



