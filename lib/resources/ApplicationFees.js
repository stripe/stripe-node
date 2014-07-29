'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'application_fees',

  includeBasic: [
    'list', 'retrieve'
  ],

  refund: stripeMethod({
    method: 'POST',
    path: '/{id}/refund',
    urlParams: ['id']
  }),

  createRefund: stripeMethod({
    method: 'POST',
    path: '/{feeId}/refunds',
    urlParams: ['feeId']
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{feeId}/refunds',
    urlParams: ['feeId']
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{feeId}/refunds/{refundId}',
    urlParams: ['feeId', 'refundId']
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{feeId}/refunds/{refundId}',
    urlParams: ['feeId', 'refundId']
  })
});
