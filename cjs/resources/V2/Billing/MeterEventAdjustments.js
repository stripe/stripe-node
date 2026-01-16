"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterEventAdjustmentResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class MeterEventAdjustmentResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/billing/meter_event_adjustments',
        }).call(this, ...args);
    }
}
exports.MeterEventAdjustmentResource = MeterEventAdjustmentResource;
//# sourceMappingURL=MeterEventAdjustments.js.map