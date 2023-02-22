// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/refunds/{refund}/expire',
  }),
});
