// File generated from our OpenAPI spec

import * as DebitReversalParams from '../params/DebitReversalParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const DebitReversalResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/debit_reversals',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/debit_reversals/{debit_reversal}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/debit_reversals',
    methodType: 'list',
  }),
});
export class DebitReversal {}
