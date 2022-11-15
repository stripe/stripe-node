// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions',
    methodType: 'list',
  }),
});
