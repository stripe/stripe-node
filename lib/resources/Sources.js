'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'sources',

  includeBasic: ['create', 'retrieve', 'update', 'setMetadata', 'getMetadata'],

  listSourceTransactions: stripeMethod({
    method: 'GET',
    path: '/{id}/source_transactions',
    urlParams: ['id'],
    methodType: 'list',
  }),

  verify: stripeMethod({
    method: 'POST',
    path: '/{id}/verify',
    urlParams: ['id'],
  }),
});
