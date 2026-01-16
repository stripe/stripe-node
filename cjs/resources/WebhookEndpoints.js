"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEndpointResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class WebhookEndpointResource extends StripeResource_js_1.StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/webhook_endpoints',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/webhook_endpoints',
        }).call(this, ...args);
    }
}
exports.WebhookEndpointResource = WebhookEndpointResource;
//# sourceMappingURL=WebhookEndpoints.js.map