'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'sources',

  includeBasic: ['create', 'retrieve', 'update'],

  verify: stripeMethod({
    method: 'POST',
    path: '/{source}/verify',
  }),

  listSourceTransactions: stripeMethod({
    method: 'GET',
    path: '/{source}/source_transactions',
    methodType: 'list',
  }),
});
