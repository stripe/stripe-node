'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    validator(data, options) {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error(
          'stripe_version must be specified to create an ephemeral key'
        );
      }
    },
  }),

  path: 'ephemeral_keys',

  includeBasic: ['del'],
});
