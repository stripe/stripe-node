// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'credit_notes',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

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
