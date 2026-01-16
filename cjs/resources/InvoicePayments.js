"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePaymentResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class InvoicePaymentResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoice_payments',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoice_payments/{invoice_payment}',
        }).call(this, ...args);
    }
}
exports.InvoicePaymentResource = InvoicePaymentResource;
//# sourceMappingURL=InvoicePayments.js.map