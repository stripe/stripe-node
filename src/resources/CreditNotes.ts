// File generated from our OpenAPI spec

import {randomUUID} from 'crypto';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditNotes = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/credit_notes'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/credit_notes/{id}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/credit_notes/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes',
    methodType: 'list',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/{credit_note}/lines',
    methodType: 'list',
  }),
  listPreviewLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/preview/lines',
    methodType: 'list',
  }),
  preview: stripeMethod({method: 'GET', fullPath: '/v1/credit_notes/preview'}),
  serializeBatchCreate(
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
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  voidCreditNote: stripeMethod({
    method: 'POST',
    fullPath: '/v1/credit_notes/{id}/void',
  }),
});
