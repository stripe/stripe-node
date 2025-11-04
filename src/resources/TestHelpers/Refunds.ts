// File generated from our OpenAPI spec

import * as RefundParams from '../params/RefundParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RefundResource = StripeResource.extend({
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/refunds/{refund}/expire',
  }),
});
export class Refund {}
