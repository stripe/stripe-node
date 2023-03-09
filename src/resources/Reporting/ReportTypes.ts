// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const ReportTypes = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_types/{report_type}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_types',
    methodType: 'list',
  }),
});
