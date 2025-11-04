// File generated from our OpenAPI spec

import * as PaymentMethodParams from '../params/PaymentMethodParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentMethodResource = StripeResource.extend({
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
  detach: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/detach',
  }),
});
export class PaymentMethod {}
