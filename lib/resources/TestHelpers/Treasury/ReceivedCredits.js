// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'test_helpers/treasury/received_credits',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
});
