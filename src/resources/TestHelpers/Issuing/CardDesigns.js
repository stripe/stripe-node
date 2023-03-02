// File generated from our OpenAPI spec

'use strict';

const {StripeResource} = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  activateTestmode: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/issuing/card_designs/{card_design}/status/activate',
  }),

  deactivateTestmode: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/issuing/card_designs/{card_design}/status/deactivate',
  }),
});
