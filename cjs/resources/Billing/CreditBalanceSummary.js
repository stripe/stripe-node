"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditBalanceSummaryResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CreditBalanceSummaryResource extends StripeResource_js_1.StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/credit_balance_summary',
        }).call(this, ...args);
    }
}
exports.CreditBalanceSummaryResource = CreditBalanceSummaryResource;
