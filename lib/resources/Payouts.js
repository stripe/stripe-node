'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payouts',

  includeBasic: [
    'create',
    'list',
    'retrieve',
    'update',
    'setMetadata',
    'getMetadata',
  ],

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
});
