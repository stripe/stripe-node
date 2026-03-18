// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BatchJobs = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/core/batch_jobs'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v2/core/batch_jobs/{id}'}),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/batch_jobs/{id}/cancel',
  }),
});
