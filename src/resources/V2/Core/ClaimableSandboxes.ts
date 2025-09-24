// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ClaimableSandboxes = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/claimable_sandboxes',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/claimable_sandboxes/{id}',
  }),
});
