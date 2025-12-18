"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDestinationResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class EventDestinationResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/event_destinations',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations',
        }).call(this, ...args);
    }
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v2/core/event_destinations/{id}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/event_destinations/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}',
        }).call(this, ...args);
    }
    disable(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}/disable',
        }).call(this, ...args);
    }
    enable(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}/enable',
        }).call(this, ...args);
    }
    ping(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}/ping',
        }).call(this, ...args);
    }
}
exports.EventDestinationResource = EventDestinationResource;
