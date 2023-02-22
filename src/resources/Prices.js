// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../StripeResource');

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/prices',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices/{price}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/prices/{price}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices',
    methodType: 'list',
  }),

  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices/search',
    methodType: 'search',
  }),
});
