// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'topups',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{topup}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{topup}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    path: '/{topup}/cancel',
  }),
});
