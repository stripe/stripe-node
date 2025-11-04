// File generated from our OpenAPI spec

import * as OrderParams from '../params/OrderParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const OrderResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/climate/orders'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/orders/{order}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/climate/orders/{order}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/orders',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/climate/orders/{order}/cancel',
  }),
});
export class Order {}
