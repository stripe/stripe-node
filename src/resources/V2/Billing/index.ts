// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  MeterEvent,
  MeterEventResource,
} from './MeterEvents.js';
import {
  V2 as V2Namespace1,
  MeterEventAdjustment,
  MeterEventAdjustmentResource,
} from './MeterEventAdjustments.js';
import {
  V2 as V2Namespace2,
  MeterEventSession,
  MeterEventSessionResource,
} from './MeterEventSession.js';
import {
  V2 as V2Namespace3,
  MeterEventStreamResource,
} from './MeterEventStream.js';

export {MeterEvent} from './MeterEvents.js';
export {MeterEventAdjustment} from './MeterEventAdjustments.js';
export {MeterEventSession} from './MeterEventSession.js';

export class Billing {
  meterEvents: MeterEventResource;
  meterEventAdjustments: MeterEventAdjustmentResource;
  meterEventSession: MeterEventSessionResource;
  meterEventStream: MeterEventStreamResource;

  constructor(private readonly stripe: Stripe) {
    this.meterEvents = new MeterEventResource(stripe);
    this.meterEventAdjustments = new MeterEventAdjustmentResource(stripe);
    this.meterEventSession = new MeterEventSessionResource(stripe);
    this.meterEventStream = new MeterEventStreamResource(stripe);
  }
}

export declare namespace Billing {
  export type MeterEventCreateParams = V2Namespace0.Billing.MeterEventCreateParams;
  export {MeterEvent};
  export type MeterEventAdjustmentCreateParams = V2Namespace1.Billing.MeterEventAdjustmentCreateParams;
  export {MeterEventAdjustment};
  export type MeterEventSessionCreateParams = V2Namespace2.Billing.MeterEventSessionCreateParams;
  export {MeterEventSession};
}
