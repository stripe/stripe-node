// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../../StripeResource');

module.exports = StripeResource.extend({
  presentPaymentMethod: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
  }),
});
