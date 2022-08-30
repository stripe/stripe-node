// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'test_helpers/treasury/inbound_transfers',

  fail: stripeMethod({
    method: 'POST',
    path: '/{id}/fail',
  }),

  returnInboundTransfer: stripeMethod({
    method: 'POST',
    path: '/{id}/return',
  }),

  succeed: stripeMethod({
    method: 'POST',
    path: '/{id}/succeed',
  }),
});
