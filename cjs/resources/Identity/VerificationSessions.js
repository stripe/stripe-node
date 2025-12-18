"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationSessionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class VerificationSessionResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/identity/verification_sessions',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/identity/verification_sessions/{session}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions/{session}',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions/{session}/cancel',
        }).call(this, ...args);
    }
    redact(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/identity/verification_sessions/{session}/redact',
        }).call(this, ...args);
    }
}
exports.VerificationSessionResource = VerificationSessionResource;
