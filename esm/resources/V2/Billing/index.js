// File generated from our OpenAPI spec
import { MeterEventResource } from './MeterEvents.js';
import { MeterEventAdjustmentResource, } from './MeterEventAdjustments.js';
import { MeterEventSessionResource, } from './MeterEventSession.js';
import { MeterEventStreamResource } from './MeterEventStream.js';
export class Billing {
    constructor(stripe) {
        this.stripe = stripe;
        this.meterEvents = new MeterEventResource(stripe);
        this.meterEventAdjustments = new MeterEventAdjustmentResource(stripe);
        this.meterEventSession = new MeterEventSessionResource(stripe);
        this.meterEventStream = new MeterEventStreamResource(stripe);
    }
}
//# sourceMappingURL=index.js.map