// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/received_credits',
  }),
});
