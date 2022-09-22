// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'orders',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    path: '/{id}/cancel',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{id}/line_items',
    methodType: 'list',
  }),
  reopen: stripeMethod({
    method: 'POST',
    path: '/{id}/reopen',
  }),
  submit: stripeMethod({
    method: 'POST',
    path: '/{id}/submit',
  }),
});
