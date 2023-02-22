// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../StripeResource');

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
