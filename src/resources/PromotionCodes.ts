// File generated from our OpenAPI spec

import * as PromotionCodeParams from '../params/PromotionCodeParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PromotionCodeResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/promotion_codes'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/promotion_codes/{promotion_code}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/promotion_codes/{promotion_code}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/promotion_codes',
    methodType: 'list',
  }),
});
export class PromotionCode {}
