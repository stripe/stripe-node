"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class MeterResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/meters',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/meters/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters/{id}',
        }).call(this, ...args);
    }
    deactivate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters/{id}/deactivate',
        }).call(this, ...args);
    }
    reactivate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters/{id}/reactivate',
        }).call(this, ...args);
    }
    listEventSummaries(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/meters/{id}/event_summaries',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.MeterResource = MeterResource;
//# sourceMappingURL=Meters.js.map