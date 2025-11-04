// File generated from our OpenAPI spec

import * as PaymentAttemptRecordParams from '../params/PaymentAttemptRecordParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentAttemptRecordResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_attempt_records/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_attempt_records',
    methodType: 'list',
  }),
});
export class PaymentAttemptRecord {}
