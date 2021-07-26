// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'coupons',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{coupon}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{coupon}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{coupon}',
  }),
});
