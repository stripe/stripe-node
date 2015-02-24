'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'transfers',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
    'setMetadata', 'getMetadata'
  ],

  reverse: stripeMethod({
    method: 'POST',
    path: '/{transferId}/reversals',
    urlParams: ['transferId']
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '{transferId}/cancel',
    urlParams: ['transferId']
  }),

  listTransactions: stripeMethod({
    method: 'GET',
    path: '{transferId}/transactions',
    urlParams: ['transferId']
  }),

  /**
   * Transfer: Reversal methods
   */
  createReversal: stripeMethod({
    method: 'POST',
    path: '/{transferId}/reversals',
    urlParams: ['transferId']
  }),

  listReversals: stripeMethod({
    method: 'GET',
    path: '/{transferId}/reversals',
    urlParams: ['transferId']
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    path: '/{transferId}/reversals/{reversalId}',
    urlParams: ['transferId', 'reversalId']
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    path: '/{transferId}/reversals/{reversalId}',
    urlParams: ['transferId', 'reversalId']
  })
});

