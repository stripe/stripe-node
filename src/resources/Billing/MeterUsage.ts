// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MeterUsage = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/analytics/meter_usage',
  }),
});
