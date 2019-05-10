'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'invoices',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '{id}/finalize',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '{id}/lines',
  }),

  listUpcomingLineItems: stripeMethod({
    method: 'GET',
    path: 'upcoming/lines',
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '{id}/mark_uncollectible',
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '{id}/pay',
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: 'upcoming',
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '{id}/send',
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '{id}/void',
  }),
});
