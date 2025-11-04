// File generated from our OpenAPI spec

import * as PaymentRecordParams from '../params/PaymentRecordParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentRecordResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/payment_records/{id}'}),
  reportPayment: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_records/report_payment',
  }),
  reportPaymentAttempt: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_records/{id}/report_payment_attempt',
  }),
  reportPaymentAttemptCanceled: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_records/{id}/report_payment_attempt_canceled',
  }),
  reportPaymentAttemptFailed: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_records/{id}/report_payment_attempt_failed',
  }),
  reportPaymentAttemptGuaranteed: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_records/{id}/report_payment_attempt_guaranteed',
  }),
  reportPaymentAttemptInformational: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_records/{id}/report_payment_attempt_informational',
  }),
  reportRefund: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_records/{id}/report_refund',
  }),
});
export class PaymentRecord {}
