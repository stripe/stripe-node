// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/setup_attempts',
    methodType: 'list',
  }),
});
