// File generated from our OpenAPI spec

import * as MeterEventAdjustmentParams from '../params/MeterEventAdjustmentParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MeterEventAdjustmentResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/meter_event_adjustments',
  }),
});
export class MeterEventAdjustment {}
