"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class AuthorizationResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations',
        }).call(this, ...args);
    }
    capture(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/capture',
        }).call(this, ...args);
    }
    expire(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/expire',
        }).call(this, ...args);
    }
    finalizeAmount(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount',
        }).call(this, ...args);
    }
    respond(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond',
        }).call(this, ...args);
    }
    increment(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/increment',
        }).call(this, ...args);
    }
    reverse(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/reverse',
        }).call(this, ...args);
    }
}
exports.AuthorizationResource = AuthorizationResource;
