// File generated from our OpenAPI spec

import * as ReaderParams from '../params/ReaderParams.js';
import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReaderResource = StripeResource.extend({
  presentPaymentMethod: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
  }),
  succeedInputCollection: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection',
  }),
  timeoutInputCollection: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection',
  }),
});
export class Reader {}
