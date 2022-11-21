// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_links',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_links/{payment_link}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_links/{payment_link}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_links',
    methodType: 'list',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_links/{payment_link}/line_items',
    methodType: 'list',
  }),
});
