// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'test_helpers/refunds',
  expire: stripeMethod({
    method: 'POST',
    path: '/{refund}/expire',
  }),
});
