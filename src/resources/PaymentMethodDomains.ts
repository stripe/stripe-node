// File generated from our OpenAPI spec

import * as PaymentMethodDomainParams from '../params/PaymentMethodDomainParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentMethodDomainResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_method_domains',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_method_domains/{payment_method_domain}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_method_domains/{payment_method_domain}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_method_domains',
    methodType: 'list',
  }),
  validate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_method_domains/{payment_method_domain}/validate',
  }),
});
export class PaymentMethodDomain {}
