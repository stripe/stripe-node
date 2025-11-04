// File generated from our OpenAPI spec

import * as InvoiceItemParams from '../params/InvoiceItemParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const InvoiceItemResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/invoiceitems'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoiceitems/{invoiceitem}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoiceitems/{invoiceitem}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoiceitems',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/invoiceitems/{invoiceitem}',
  }),
});
export class InvoiceItem {}
