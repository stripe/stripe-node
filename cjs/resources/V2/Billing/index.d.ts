import { StripeClient } from '../../../stripe.core.js';
import { MeterEventResource } from './MeterEvents.js';
import { MeterEventAdjustmentResource } from './MeterEventAdjustments.js';
import { MeterEventSessionResource } from './MeterEventSession.js';
import { MeterEventStreamResource } from './MeterEventStream.js';
export { MeterEvent } from './MeterEvents.js';
export { MeterEventAdjustment } from './MeterEventAdjustments.js';
export { MeterEventSession } from './MeterEventSession.js';
export declare class Billing {
    private readonly stripe;
    meterEvents: MeterEventResource;
    meterEventAdjustments: MeterEventAdjustmentResource;
    meterEventSession: MeterEventSessionResource;
    meterEventStream: MeterEventStreamResource;
    constructor(stripe: StripeClient);
}
