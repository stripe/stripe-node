// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReportRuns = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/reporting/report_runs'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/reporting/report_runs/{id}',
  }),
});
