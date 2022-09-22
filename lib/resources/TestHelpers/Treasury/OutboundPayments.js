// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'test_helpers/treasury/outbound_payments',
  fail: stripeMethod({
    method: 'POST',
    path: '/{id}/fail',
  }),
  post: stripeMethod({
    method: 'POST',
    path: '/{id}/post',
  }),
  returnOutboundPayment: stripeMethod({
    method: 'POST',
    path: '/{id}/return',
  }),
});
