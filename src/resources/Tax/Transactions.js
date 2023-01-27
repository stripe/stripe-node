// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}',
  }),

  createReversal: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions/create_reversal',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}/line_items',
    methodType: 'list',
  }),

  listTransactions: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions',
    methodType: 'list',
  }),
});
