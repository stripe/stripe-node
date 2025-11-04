// File generated from our OpenAPI spec

import * as ShippingRateParams from '../params/ShippingRateParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ShippingRateResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/shipping_rates'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/shipping_rates/{shipping_rate_token}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/shipping_rates/{shipping_rate_token}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/shipping_rates',
    methodType: 'list',
  }),
});
export class ShippingRate {}
