'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'payouts',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
    'setMetadata', 'getMetadata',
  ],

  cancel: stripeMethod({
    method: 'POST',
    path: '{payoutId}/cancel',
    urlParams: ['payoutId'],
  }),

  listTransactions: stripeMethod({
    method: 'GET',
    path: '{payoutId}/transactions',
    urlParams: ['payoutId'],
  }),
});

