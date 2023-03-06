// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Refunds = StripeResource.extend({
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/refunds/{refund}/expire',
  }),
});
