// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'test_helpers/treasury/outbound_transfers',

  fail: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/fail',
  }),

  post: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/post',
  }),

  returnOutboundTransfer: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/return',
  }),
});
