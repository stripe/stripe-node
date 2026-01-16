"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class SessionResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/checkout/sessions',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/checkout/sessions',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/checkout/sessions/{session}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/checkout/sessions/{session}',
        }).call(this, ...args);
    }
    expire(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/checkout/sessions/{session}/expire',
        }).call(this, ...args);
    }
    listLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/checkout/sessions/{session}/line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.SessionResource = SessionResource;
//# sourceMappingURL=Sessions.js.map