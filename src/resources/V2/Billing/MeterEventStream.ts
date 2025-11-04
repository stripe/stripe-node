// File generated from our OpenAPI spec

import * as MeterEventStreamParams from '../params/MeterEventStreamParams.js';
import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MeterEventStreamResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/meter_event_stream',
    host: 'meter-events.stripe.com',
  }),
});
