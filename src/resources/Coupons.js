// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../StripeResource');

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/coupons',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/coupons/{coupon}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/coupons/{coupon}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/coupons',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/coupons/{coupon}',
  }),
});
