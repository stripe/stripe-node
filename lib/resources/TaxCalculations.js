// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/calculations',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/calculations/{calculation}/line_items',
    methodType: 'list',
  }),
});
