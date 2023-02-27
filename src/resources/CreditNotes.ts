// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const CreditNotes = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/credit_notes',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/credit_notes/{id}',
  }),

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

  preview: stripeMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/preview',
  }),

  voidCreditNote: stripeMethod({
    method: 'POST',
    fullPath: '/v1/credit_notes/{id}/void',
  }),
});
