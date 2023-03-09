// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const ConnectionTokens = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/connection_tokens',
  }),
});
