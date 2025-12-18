"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterEventStreamResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class MeterEventStreamResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/billing/meter_event_stream',
            host: 'meter-events.stripe.com',
        }).call(this, ...args);
    }
}
exports.MeterEventStreamResource = MeterEventStreamResource;
