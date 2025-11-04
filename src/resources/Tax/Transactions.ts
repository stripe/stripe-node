// File generated from our OpenAPI spec

import * as TransactionParams from '../params/TransactionParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TransactionResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}',
  }),
  createFromCalculation: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions/create_from_calculation',
  }),
  createReversal: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions/create_reversal',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}/line_items',
    methodType: 'list',
  }),
});
export class Transaction {}
