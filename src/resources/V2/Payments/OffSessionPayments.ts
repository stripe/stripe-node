// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const OffSessionPayments = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/payments/off_session_payments',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/payments/off_session_payments/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/payments/off_session_payments',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/payments/off_session_payments/{id}/cancel',
  }),
  capture: stripeMethod({
    method: 'POST',
    fullPath: '/v2/payments/off_session_payments/{id}/capture',
  }),
});
