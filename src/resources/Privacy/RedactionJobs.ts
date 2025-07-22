// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RedactionJobs = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/privacy/redaction_jobs',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/privacy/redaction_jobs/{job}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/privacy/redaction_jobs/{job}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/privacy/redaction_jobs',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/privacy/redaction_jobs/{job}/cancel',
  }),
  listValidationErrors: stripeMethod({
    method: 'GET',
    fullPath: '/v1/privacy/redaction_jobs/{job}/validation_errors',
    methodType: 'list',
  }),
  run: stripeMethod({
    method: 'POST',
    fullPath: '/v1/privacy/redaction_jobs/{job}/run',
  }),
  validate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/privacy/redaction_jobs/{job}/validate',
  }),
});
