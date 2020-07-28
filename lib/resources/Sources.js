// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'sources',

  includeBasic: ['create', 'retrieve', 'update'],

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
