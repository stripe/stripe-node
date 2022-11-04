// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_lists',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_lists/{value_list}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_lists/{value_list}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_lists',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/radar/value_lists/{value_list}',
  }),
});
