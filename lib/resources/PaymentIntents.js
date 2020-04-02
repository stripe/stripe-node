'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_intents',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '/{intent}/capture',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),

  constants: {
    cancellation_reason: {
      abandoned: 'abandoned',
      automatic: 'automatic',
      duplicate: 'duplicate',
      failed_invoice: 'failed_invoice',
      fraudulent: 'fraudulent',
      requested_by_customer: 'requested_by_customer',
      void_invoice: 'void_invoice',
    },
    last_payment_error: {
      type: {
        api_connection_error: 'api_connection_error',
        api_error: 'api_error',
        authentication_error: 'authentication_error',
        card_error: 'card_error',
        idempotency_error: 'idempotency_error',
        invalid_request_error: 'invalid_request_error',
        rate_limit_error: 'rate_limit_error',
      },
    },
  },
});
