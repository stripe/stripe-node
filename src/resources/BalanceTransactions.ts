// File generated from our OpenAPI spec

import * as BalanceTransactionParams from '../params/BalanceTransactionParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BalanceTransactionResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions',
    methodType: 'list',
  }),
});
export class BalanceTransaction {}
