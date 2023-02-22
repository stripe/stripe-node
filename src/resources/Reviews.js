// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../StripeResource');

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reviews/{review}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reviews',
    methodType: 'list',
  }),

  approve: stripeMethod({
    method: 'POST',
    fullPath: '/v1/reviews/{review}/approve',
  }),
});
