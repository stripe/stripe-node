'use strict';

var utils = require('../utils');
var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  validateRequest: function(method, path, data, options) {
    if (method === 'POST' && path === '/v1/ephemeral_keys') {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error('stripe_version must be specified to create an ephemeral key');
      }
    }
  },

  path: 'ephemeral_keys',

  includeBasic: ['create', 'del'],
});
