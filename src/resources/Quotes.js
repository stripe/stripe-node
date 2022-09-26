// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'quotes',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{quote}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{quote}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  accept: stripeMethod({
    method: 'POST',
    path: '/{quote}/accept',
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{quote}/cancel',
  }),

  finalizeQuote: stripeMethod({
    method: 'POST',
    path: '/{quote}/finalize',
  }),

  listComputedUpfrontLineItems: stripeMethod({
    method: 'GET',
    path: '/{quote}/computed_upfront_line_items',
    methodType: 'list',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{quote}/line_items',
    methodType: 'list',
  }),

  pdf: stripeMethod({
    host: 'files.stripe.com',
    method: 'GET',
    path: '/{quote}/pdf',
    streaming: true,
  }),
});
