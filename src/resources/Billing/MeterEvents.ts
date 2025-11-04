// File generated from our OpenAPI spec

import * as MeterEventParams from '../params/MeterEventParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MeterEventResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/billing/meter_events'}),
});
export class MeterEvent {}
