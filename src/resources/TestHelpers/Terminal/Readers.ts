// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../../StripeResource';
const stripeMethod = StripeResource.method;

export const Readers = StripeResource.extend({
  presentPaymentMethod: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
  }),
});
