"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRecordResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class PaymentRecordResource extends StripeResource_js_1.StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_records/{id}',
        }).call(this, ...args);
    }
    reportPaymentAttempt(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_records/{id}/report_payment_attempt',
        }).call(this, ...args);
    }
    reportPaymentAttemptCanceled(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_records/{id}/report_payment_attempt_canceled',
        }).call(this, ...args);
    }
    reportPaymentAttemptFailed(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_records/{id}/report_payment_attempt_failed',
        }).call(this, ...args);
    }
    reportPaymentAttemptGuaranteed(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_records/{id}/report_payment_attempt_guaranteed',
        }).call(this, ...args);
    }
    reportPaymentAttemptInformational(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_records/{id}/report_payment_attempt_informational',
        }).call(this, ...args);
    }
    reportRefund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_records/{id}/report_refund',
        }).call(this, ...args);
    }
    reportPayment(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_records/report_payment',
        }).call(this, ...args);
    }
}
exports.PaymentRecordResource = PaymentRecordResource;
//# sourceMappingURL=PaymentRecords.js.map