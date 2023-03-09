// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const InvoiceItems = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoiceitems',
  }),

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
