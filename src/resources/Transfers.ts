// File generated from our OpenAPI spec

import * as TransferParams from '../params/TransferParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TransferResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/transfers'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/transfers/{transfer}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/transfers/{transfer}'}),
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
export class Transfer {}
