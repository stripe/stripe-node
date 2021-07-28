// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'sources',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{source}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{source}',
  }),

  listSourceTransactions: stripeMethod({
    method: 'GET',
    path: '/{source}/source_transactions',
    methodType: 'list',
  }),

  verify: stripeMethod({
    method: 'POST',
    path: '/{source}/verify',
  }),
});
