// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'invoices',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{invoice}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{invoice}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{invoice}',
  }),

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/finalize',
  }),

  listUpcomingLines: stripeMethod({
    method: 'GET',
    path: '/upcoming/lines',
    methodType: 'list',
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '/{invoice}/mark_uncollectible',
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '/{invoice}/pay',
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: '/upcoming',
  }),

  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/send',
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/void',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{invoice}/lines',
    methodType: 'list',
  }),
});
