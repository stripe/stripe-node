'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'invoices',
  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '{id}/finalize',
    urlParams: ['id'],
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '{id}/lines',
    urlParams: ['id'],
  }),

  listUpcomingLineItems: stripeMethod({
    method: 'GET',
    path: 'upcoming/lines',
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '{id}/mark_uncollectible',
    urlParams: ['id'],
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '{id}/pay',
    urlParams: ['id'],
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: 'upcoming',
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '{id}/send',
    urlParams: ['id'],
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '{id}/void',
    urlParams: ['id'],
  }),
});
