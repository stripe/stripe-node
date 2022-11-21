// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  fail: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail',
  }),
  returnInboundTransfer: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return',
  }),
  succeed: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed',
  }),
});
