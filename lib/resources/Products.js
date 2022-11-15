// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/products',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/products/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/products/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/products',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/products/{id}',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/products/search',
    methodType: 'search',
  }),
});
