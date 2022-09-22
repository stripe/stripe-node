// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'apple_pay/domains',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{domain}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{domain}',
  }),
});
