// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const PromotionCodes = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/promotion_codes',
  }),

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
