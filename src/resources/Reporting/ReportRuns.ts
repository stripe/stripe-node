// File generated from our OpenAPI spec

import * as ReportRunParams from '../params/ReportRunParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReportRunResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/reporting/report_runs'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_runs/{report_run}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_runs',
    methodType: 'list',
  }),
});
export class ReportRun {}
