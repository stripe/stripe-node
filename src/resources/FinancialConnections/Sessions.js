// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/sessions',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/sessions/{session}',
  }),
});
