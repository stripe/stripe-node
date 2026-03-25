// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReportRuns = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/reporting/report_runs',
    responseSchema: {
      kind: 'object',
      fields: {
        result: {
          kind: 'object',
          fields: {
            file: {kind: 'object', fields: {size: {kind: 'int64_string'}}},
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/reporting/report_runs/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        result: {
          kind: 'object',
          fields: {
            file: {kind: 'object', fields: {size: {kind: 'int64_string'}}},
          },
        },
      },
    },
  }),
});
