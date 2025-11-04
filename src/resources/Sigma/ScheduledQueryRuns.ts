// File generated from our OpenAPI spec

import * as ScheduledQueryRunParams from '../params/ScheduledQueryRunParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ScheduledQueryRunResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/sigma/scheduled_query_runs/{scheduled_query_run}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/sigma/scheduled_query_runs',
    methodType: 'list',
  }),
});
export class ScheduledQueryRun {}
