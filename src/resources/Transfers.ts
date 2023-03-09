// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Transfers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/transfers',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/transfers/{transfer}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/transfers/{transfer}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/transfers',
    methodType: 'list',
  }),

  createReversal: stripeMethod({
    method: 'POST',
    fullPath: '/v1/transfers/{id}/reversals',
  }),

  listReversals: stripeMethod({
    method: 'GET',
    fullPath: '/v1/transfers/{id}/reversals',
    methodType: 'list',
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    fullPath: '/v1/transfers/{transfer}/reversals/{id}',
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    fullPath: '/v1/transfers/{transfer}/reversals/{id}',
  }),
});
