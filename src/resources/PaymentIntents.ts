// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentIntents = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/payment_intents'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents/{intent}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents',
    methodType: 'list',
  }),
  applyCustomerBalance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/apply_customer_balance',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/cancel',
  }),
  capture: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/capture',
  }),
  confirm: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/confirm',
  }),
  decrementAuthorization: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/decrement_authorization',
  }),
  incrementAuthorization: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/increment_authorization',
  }),
  listAmountDetailsLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents/{intent}/amount_details_line_items',
    methodType: 'list',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents/search',
    methodType: 'search',
  }),
  triggerAction: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test/payment_intents/{intent}/trigger_action',
  }),
  verifyMicrodeposits: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/verify_microdeposits',
  }),
});
