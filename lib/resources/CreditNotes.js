// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'credit_notes',

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

  preview: stripeMethod({
    method: 'GET',
    path: '/preview',
  }),

  voidCreditNote: stripeMethod({
    method: 'POST',
    path: '/{id}/void',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{creditNote}/lines',
    methodType: 'list',
  }),

  listPreviewLineItems: stripeMethod({
    method: 'GET',
    path: '/preview/lines',
    methodType: 'list',
  }),
});
