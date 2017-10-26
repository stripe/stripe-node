'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'sources',

  includeBasic: [
    'create', 'retrieve', 'update', 'setMetadata', 'getMetadata',
  ],

  listSourceTransactions: stripeMethod({
    method: 'GET',
    path: '/{id}/source_transactions',
    urlParams: ['id'],
  }),

  verify: stripeMethod({
    method: 'POST',
    path: '/{id}/verify',
    urlParams: ['id'],
  }),

});
