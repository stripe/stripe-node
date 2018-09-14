'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'balance',

  retrieve: stripeMethod({
    method: 'GET',
  }),

  listTransactions: stripeMethod({
    method: 'GET',
    path: 'history',
    methodType: 'list',
  }),

  retrieveTransaction: stripeMethod({
    method: 'GET',
    path: 'history/{transactionId}',
    urlParams: ['transactionId'],
  }),

});
