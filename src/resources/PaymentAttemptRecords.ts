// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentAttemptRecords = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_attempt_records/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_attempt_records',
    methodType: 'list',
  }),
  reportAuthenticated: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/payment_attempt_records/{payment_attempt_record}/report_authenticated',
  }),
  reportCanceled: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/payment_attempt_records/{payment_attempt_record}/report_canceled',
  }),
  reportFailed: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/payment_attempt_records/{payment_attempt_record}/report_failed',
  }),
  reportGuaranteed: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/payment_attempt_records/{payment_attempt_record}/report_guaranteed',
  }),
  reportInformational: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/payment_attempt_records/{payment_attempt_record}/report_informational',
  }),
  reportRefund: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/payment_attempt_records/{payment_attempt_record}/report_refund',
  }),
});
