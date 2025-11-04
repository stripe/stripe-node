// File generated from our OpenAPI spec

import * as InvoicePaymentParams from '../params/InvoicePaymentParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const InvoicePaymentResource = StripeResource.extend({
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
export class InvoicePayment {}
