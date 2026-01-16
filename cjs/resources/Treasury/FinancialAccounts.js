"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialAccountResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class FinancialAccountResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/treasury/financial_accounts',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}',
        }).call(this, ...args);
    }
    close(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}/close',
        }).call(this, ...args);
    }
    updateFeatures(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
        }).call(this, ...args);
    }
    retrieveFeatures(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
        }).call(this, ...args);
    }
}
exports.FinancialAccountResource = FinancialAccountResource;
//# sourceMappingURL=FinancialAccounts.js.map