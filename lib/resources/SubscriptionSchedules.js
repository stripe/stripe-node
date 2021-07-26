// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_schedules',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{schedule}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{schedule}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{schedule}/cancel',
  }),

  release: stripeMethod({
    method: 'POST',
    path: '/{schedule}/release',
  }),
});
