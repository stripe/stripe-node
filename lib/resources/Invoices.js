// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/invoices/{invoice}',
  }),
  finalizeInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/finalize',
  }),
  listUpcomingLines: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/upcoming/lines',
    methodType: 'list',
  }),
  markUncollectible: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
  }),
  pay: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/pay',
  }),
  retrieveUpcoming: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/upcoming',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/search',
    methodType: 'search',
  }),
  sendInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/send',
  }),
  voidInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/void',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/lines',
    methodType: 'list',
  }),
});
