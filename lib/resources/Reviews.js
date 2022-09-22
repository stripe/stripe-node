// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'reviews',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{review}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  approve: stripeMethod({
    method: 'POST',
    path: '/{review}/approve',
  }),
});
