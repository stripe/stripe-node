// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../../StripeResource');

module.exports = StripeResource.extend({
  fail: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
  }),

  post: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
  }),

  returnOutboundPayment: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
  }),
});
