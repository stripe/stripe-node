'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'invoices',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/finalize',
    urlParams: ['invoice'],
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{invoice}/lines',
    urlParams: ['invoice'],
  }),

  listUpcomingLineItems: stripeMethod({
    method: 'GET',
    path: 'upcoming/lines',
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '/{invoice}/mark_uncollectible',
    urlParams: ['invoice'],
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '/{invoice}/pay',
    urlParams: ['invoice'],
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: 'upcoming',
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/send',
    urlParams: ['invoice'],
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/void',
    urlParams: ['invoice'],
  }),
});
