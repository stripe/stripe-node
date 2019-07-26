'use strict';

const StripeResource = require('../StripeResource');
const {STRIPE_VERSION} = require('../http-headers');
const {getCaseInsensitiveProperty} = require('../utils');

const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'ephemeral_keys',

  includeBasic: ['del'],

  create: stripeMethod({
    method: 'POST',
    validator: (data, options) => {
      if (!getCaseInsensitiveProperty(options.headers, STRIPE_VERSION)) {
        throw new TypeError(
          'stripe_version must be specified to create an ephemeral key'
        );
      }
    },
  }),
});
