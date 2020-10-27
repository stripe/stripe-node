// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'invoices',

  includeBasic: ['create', 'retrieve', 'update', 'list', 'del'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/finalize',
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

  listUpcomingLineItems: stripeMethod({
    method: 'GET',
    path: '/upcoming/lines',
    methodType: 'list',
  }),
});
