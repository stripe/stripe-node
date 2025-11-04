// File generated from our OpenAPI spec

import * as ReceivedCreditParams from '../params/ReceivedCreditParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReceivedCreditResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_credits/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_credits',
    methodType: 'list',
  }),
});
export class ReceivedCredit {}
