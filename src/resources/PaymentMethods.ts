// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentMethods = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/payment_methods'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_methods/{payment_method}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_methods',
    methodType: 'list',
  }),
  attach: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/attach',
  }),
  checkBalance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/check_balance',
  }),
  detach: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/detach',
  }),
});
