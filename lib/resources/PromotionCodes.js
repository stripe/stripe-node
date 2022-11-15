// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
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
