// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MeterEvents = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/meter_events'}),
});
