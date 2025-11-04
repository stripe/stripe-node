// File generated from our OpenAPI spec

import * as CreditBalanceTransactionParams from '../params/CreditBalanceTransactionParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditBalanceTransactionResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_balance_transactions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_balance_transactions',
    methodType: 'list',
  }),
});
export class CreditBalanceTransaction {}
