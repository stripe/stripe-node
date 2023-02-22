// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/locations',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/locations/{location}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/locations/{location}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/locations',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/locations/{location}',
  }),
});
