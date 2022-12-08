// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/orders',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/orders/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/orders/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/orders',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/orders/{id}/cancel',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/orders/{id}/line_items',
    methodType: 'list',
  }),

  reopen: stripeMethod({
    method: 'POST',
    fullPath: '/v1/orders/{id}/reopen',
  }),

  submit: stripeMethod({
    method: 'POST',
    fullPath: '/v1/orders/{id}/submit',
  }),
});
