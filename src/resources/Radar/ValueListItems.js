// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_list_items',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),
});
