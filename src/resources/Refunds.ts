// File generated from our OpenAPI spec

import * as RefundParams from '../params/RefundParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RefundResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/refunds'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/refunds/{refund}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/refunds/{refund}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/refunds',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/refunds/{refund}/cancel',
  }),
});
export class Refund {}
