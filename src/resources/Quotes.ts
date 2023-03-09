// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Quotes = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes',
    methodType: 'list',
  }),

  accept: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/accept',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/cancel',
  }),

  draftQuote: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/mark_draft',
  }),

  finalizeQuote: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/finalize',
  }),

  listComputedUpfrontLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
    methodType: 'list',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/line_items',
    methodType: 'list',
  }),

  listLines: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/lines',
    methodType: 'list',
  }),

  markStaleQuote: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/mark_stale',
  }),

  pdf: stripeMethod({
    host: 'files.stripe.com',
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/pdf',
    streaming: true,
  }),

  previewInvoiceLines: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/preview_invoice_lines',
    methodType: 'list',
  }),

  previewInvoices: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/preview_invoices',
    methodType: 'list',
  }),

  previewSubscriptionSchedules: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/preview_subscription_schedules',
    methodType: 'list',
  }),

  reestimate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/reestimate',
  }),
});
