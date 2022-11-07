// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates/{rate_id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates',
    methodType: 'list',
  }),
});
