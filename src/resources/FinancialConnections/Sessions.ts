// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Sessions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/sessions',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/sessions/{session}',
  }),
});
