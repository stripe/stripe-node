'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    validator: function(data, options) {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error('stripe_version must be specified to create an ephemeral key');
      }
    },
  }),

  path: 'ephemeral_keys',

  includeBasic: ['del'],
});
