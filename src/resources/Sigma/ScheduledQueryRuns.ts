// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const ScheduledQueryRuns = StripeResource.extend({
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
