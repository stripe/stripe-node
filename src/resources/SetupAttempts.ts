// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const SetupAttempts = StripeResource.extend({
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/setup_attempts',
    methodType: 'list',
  }),
});
