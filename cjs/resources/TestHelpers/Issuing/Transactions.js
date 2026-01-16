"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class TransactionResource extends StripeResource_js_1.StripeResource {
    refund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/transactions/{transaction}/refund',
        }).call(this, ...args);
    }
    createForceCapture(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/transactions/create_force_capture',
        }).call(this, ...args);
    }
    createUnlinkedRefund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/transactions/create_unlinked_refund',
        }).call(this, ...args);
    }
}
exports.TransactionResource = TransactionResource;
//# sourceMappingURL=Transactions.js.map