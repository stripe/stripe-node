// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'disputes',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{dispute}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{dispute}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  close: stripeMethod({
    method: 'POST',
    path: '/{dispute}/close',
  }),
});
