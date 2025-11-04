// File generated from our OpenAPI spec

import * as ReceivedDebitParams from '../params/ReceivedDebitParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReceivedDebitResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_debits/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_debits',
    methodType: 'list',
  }),
});
export class ReceivedDebit {}
