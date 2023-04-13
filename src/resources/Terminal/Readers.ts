// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;

export const Readers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/readers/{reader}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/readers',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/readers/{reader}',
  }),

  cancelAction: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/cancel_action',
  }),

  collectInputs: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/collect_inputs',
  }),

  collectPaymentMethod: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/collect_payment_method',
  }),

  confirmPaymentIntent: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/confirm_payment_intent',
  }),

  processPaymentIntent: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/process_payment_intent',
  }),

  processSetupIntent: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/process_setup_intent',
  }),

  refundPayment: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/refund_payment',
  }),

  setReaderDisplay: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/set_reader_display',
  }),
});
