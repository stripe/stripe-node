'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'application_fees',

  includeBasic: ['list', 'retrieve'],

  createRefund: stripeMethod({
    method: 'POST',
    path: '/{feeId}/refunds',
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{feeId}/refunds',
    methodType: 'list',
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{feeId}/refunds/{refundId}',
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{feeId}/refunds/{refundId}',
  }),
});
