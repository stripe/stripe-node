// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'ephemeral_keys',

  includeBasic: ['del'],

  create: stripeMethod({
    method: 'POST',
    path: '',
    validator: (data, options) => {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error(
          'stripe_version must be specified to create an ephemeral key'
        );
      }
    },
  }),
});
