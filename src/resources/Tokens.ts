// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Tokens = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tokens',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tokens/{token}',
  }),
});
