'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'balance',
  includeBasic: ['retrieve'],

  listTransactions: stripeMethod({
    method: 'GET',
    path: 'history'
  }),

  retrieveTransaction: stripeMethod({
    method: 'GET',
    path: 'history/{transactionId}',
    urlParams: ['transactionId']
  })

});
