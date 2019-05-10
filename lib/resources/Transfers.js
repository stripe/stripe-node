'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'transfers',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  createReversal: stripeMethod({
    method: 'POST',
    path: '/{id}/reversals',
    urlParams: ['id'],
  }),

  listReversals: stripeMethod({
    method: 'GET',
    path: '/{id}/reversals',
    urlParams: ['id'],
    methodType: 'list',
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    path: '/{transfer}/reversals/{id}',
    urlParams: ['transfer', 'id'],
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    path: '/{transfer}/reversals/{id}',
    urlParams: ['transfer', 'id'],
  }),
});
