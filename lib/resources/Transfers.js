id'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'transfers',

  includeBasic: [
    'create',
    'list',
    'retrieve',
    'update',
    'setMetadata',
    'getMetadata',
  ],

  reverse: stripeMethod({
    method: 'POST',
    path: '/{id}/reversals',
    urlParams: ['id'],
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '{id}/cancel',
    urlParams: ['id'],
  }),

  listTransactions: stripeMethod({
    method: 'GET',
    path: '{id}/transactions',
    urlParams: ['id'],
    methodType: 'list',
  }),

  /**
   * Transfer: Reversal methods
   */
  createReversal: stripeMethod({
    method: 'POST',
    path: '/{id}/reversals',
    urlParams: ['id'],
  }),

  listReversals: stripeMethod({
    method: 'GET',
    path: '/{id}/reversals',
    urlParams: ['id'],
    methodType: 'list',
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    path: '/{transferId}/reversals/{reversalId}',
    urlParams: ['transferId', 'reversalId'],
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    path: '/{transferId}/reversals/{reversalId}',
    urlParams: ['transferId', 'reversalId'],
  }),
});
