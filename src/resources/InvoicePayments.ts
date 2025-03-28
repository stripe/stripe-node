// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const InvoicePayments = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoice_payments/{invoice_payment}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoice_payments',
    methodType: 'list',
  }),
});
