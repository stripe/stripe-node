// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Invoices = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/invoices'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/invoices/{invoice}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/invoices/{invoice}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices',
    methodType: 'list',
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/invoices/{invoice}'}),
  addLines: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/add_lines',
  }),
  attachPayment: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/attach_payment',
  }),
  attachPaymentIntent: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/attach_payment_intent',
  }),
  createPreview: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/create_preview',
  }),
  finalizeInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/finalize',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/lines',
    methodType: 'list',
  }),
  listPayments: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/payments',
    methodType: 'list',
  }),
  markUncollectible: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
  }),
  pay: stripeMethod({method: 'POST', fullPath: '/v1/invoices/{invoice}/pay'}),
  removeLines: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/remove_lines',
  }),
  retrievePayment: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/payments/{invoice_payment}',
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
  updateLines: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/update_lines',
  }),
  updateLineItem: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/lines/{line_item_id}',
  }),
  voidInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/void',
  }),
});
