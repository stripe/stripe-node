// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../StripeResource');

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_codes/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_codes',
    methodType: 'list',
  }),
});
