// File generated from our OpenAPI spec

import * as CouponParams from '../params/CouponParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CouponResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/coupons'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/coupons/{coupon}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/coupons/{coupon}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/coupons',
    methodType: 'list',
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/coupons/{coupon}'}),
});
export class Coupon {}
