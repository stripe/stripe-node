// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ServiceActions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/service_actions',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/service_actions/{id}',
  }),
});
