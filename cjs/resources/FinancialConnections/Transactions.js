"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class TransactionResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/financial_connections/transactions',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/financial_connections/transactions/{transaction}',
        }).call(this, ...args);
    }
}
exports.TransactionResource = TransactionResource;
//# sourceMappingURL=Transactions.js.map