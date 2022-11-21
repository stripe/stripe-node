// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/topups',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/topups/{topup}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/topups/{topup}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/topups',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/topups/{topup}/cancel',
  }),
});
