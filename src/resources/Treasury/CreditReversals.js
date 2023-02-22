// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/credit_reversals',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/credit_reversals/{credit_reversal}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/credit_reversals',
    methodType: 'list',
  }),
});
