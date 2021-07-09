// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'quotes',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

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

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{quote}/line_items',
  }),

  pdf: stripeMethod({
    host: 'files.stripe.com',
    method: 'GET',
    path: '/{quote}/pdf',
    streaming: true,
  }),
});
