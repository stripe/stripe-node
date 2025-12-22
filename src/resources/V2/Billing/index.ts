// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {MeterEventResource} from './MeterEvents.js';
import {MeterEventAdjustmentResource} from './MeterEventAdjustments.js';
import {MeterEventSessionResource} from './MeterEventSession.js';
import {MeterEventStreamResource} from './MeterEventStream.js';

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
