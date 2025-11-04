// File generated from our OpenAPI spec

import * as PriceParams from '../params/PriceParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PriceResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/prices'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/prices/{price}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/prices/{price}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices',
    methodType: 'list',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices/search',
    methodType: 'search',
  }),
});
export class Price {}
