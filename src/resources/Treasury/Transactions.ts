// File generated from our OpenAPI spec

import * as TransactionParams from '../params/TransactionParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TransactionResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transactions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transactions',
    methodType: 'list',
  }),
});
export class Transaction {}
