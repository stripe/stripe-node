"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditGrantResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CreditGrantResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/credit_grants',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/credit_grants/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants/{id}',
        }).call(this, ...args);
    }
    expire(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants/{id}/expire',
        }).call(this, ...args);
    }
    voidGrant(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants/{id}/void',
        }).call(this, ...args);
    }
}
exports.CreditGrantResource = CreditGrantResource;
//# sourceMappingURL=CreditGrants.js.map