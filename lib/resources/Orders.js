// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'orders',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '/{id}/pay',
  }),

  returnOrder: stripeMethod({
    method: 'POST',
    path: '/{id}/returns',
  }),
});
