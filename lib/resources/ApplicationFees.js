// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'application_fees',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  createRefund: stripeMethod({
    method: 'POST',
    path: '/{id}/refunds',
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{fee}/refunds/{id}',
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{fee}/refunds/{id}',
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{id}/refunds',
    methodType: 'list',
  }),
});
