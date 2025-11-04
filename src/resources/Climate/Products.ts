// File generated from our OpenAPI spec

import * as ProductParams from '../params/ProductParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ProductResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/products/{product}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/products',
    methodType: 'list',
  }),
});
export class Product {}
