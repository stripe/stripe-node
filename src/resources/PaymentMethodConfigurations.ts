// File generated from our OpenAPI spec

import * as PaymentMethodConfigurationParams from '../params/PaymentMethodConfigurationParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentMethodConfigurationResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_method_configurations',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_method_configurations/{configuration}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_method_configurations/{configuration}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_method_configurations',
    methodType: 'list',
  }),
});
export class PaymentMethodConfiguration {}
