"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
const MeterEvents_js_1 = require("./MeterEvents.js");
const MeterEventAdjustments_js_1 = require("./MeterEventAdjustments.js");
const MeterEventSession_js_1 = require("./MeterEventSession.js");
const MeterEventStream_js_1 = require("./MeterEventStream.js");
class Billing {
    constructor(stripe) {
        this.stripe = stripe;
        this.meterEvents = new MeterEvents_js_1.MeterEventResource(stripe);
        this.meterEventAdjustments = new MeterEventAdjustments_js_1.MeterEventAdjustmentResource(stripe);
        this.meterEventSession = new MeterEventSession_js_1.MeterEventSessionResource(stripe);
        this.meterEventStream = new MeterEventStream_js_1.MeterEventStreamResource(stripe);
    }
}
exports.Billing = Billing;
//# sourceMappingURL=index.js.map