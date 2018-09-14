'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'bitcoin/receivers',

  includeBasic: [
    'list', 'retrieve', 'getMetadata',
  ],

  listTransactions: stripeMethod({
    method: 'GET',
    path: '/{receiverId}/transactions',
    urlParams: ['receiverId'],
    methodType: 'list',
  }),
});
