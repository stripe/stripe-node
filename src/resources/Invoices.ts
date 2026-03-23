// File generated from our OpenAPI spec

import {randomUUID} from 'crypto';
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
  createPreview: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/create_preview',
  }),
  detachPayment: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/detach_payment',
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
  markUncollectible: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
  }),
  pay: stripeMethod({method: 'POST', fullPath: '/v1/invoices/{invoice}/pay'}),
  removeLines: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/remove_lines',
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
  serializeBatchPay(
    invoice: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {invoice: invoice};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  serializeBatchUpdate(
    invoice: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {invoice: invoice};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
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
