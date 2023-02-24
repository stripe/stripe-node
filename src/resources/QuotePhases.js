// File generated from our OpenAPI spec

'use strict';

const {StripeResource} = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quote_phases/{quote_phase}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quote_phases',
    methodType: 'list',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quote_phases/{quote_phase}/line_items',
    methodType: 'list',
  }),
});
