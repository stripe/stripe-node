"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class TransactionResource extends StripeResource_js_1.StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/transactions/{transaction}',
        }).call(this, ...args);
    }
    createFromCalculation(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/tax/transactions/create_from_calculation',
        }).call(this, ...args);
    }
    createReversal(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/tax/transactions/create_reversal',
        }).call(this, ...args);
    }
    listLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/transactions/{transaction}/line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.TransactionResource = TransactionResource;
//# sourceMappingURL=Transactions.js.map