// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PaymentRecordResource extends StripeResource {
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
