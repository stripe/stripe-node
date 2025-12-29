import { Stripe } from '../../../stripe.core.js';
import { MeterEvent, MeterEventResource } from './MeterEvents.js';
import { MeterEventAdjustment, MeterEventAdjustmentResource } from './MeterEventAdjustments.js';
import { MeterEventSession, MeterEventSessionResource } from './MeterEventSession.js';
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
    constructor(stripe: Stripe);
}
export declare namespace Billing {
    export { MeterEvent };
    export { MeterEventAdjustment };
    export { MeterEventSession };
}
