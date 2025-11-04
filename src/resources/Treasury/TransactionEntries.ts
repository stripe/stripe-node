// File generated from our OpenAPI spec

import * as TransactionEntryParams from '../params/TransactionEntryParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TransactionEntryResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transaction_entries/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transaction_entries',
    methodType: 'list',
  }),
});
export class TransactionEntry {}
