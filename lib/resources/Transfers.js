// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'transfers',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  createReversal: stripeMethod({
    method: 'POST',
    path: '/{id}/reversals',
  }),

  listReversals: stripeMethod({
    method: 'GET',
    path: '/{id}/reversals',
    methodType: 'list',
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    path: '/{transfer}/reversals/{id}',
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    path: '/{transfer}/reversals/{id}',
  }),
});
