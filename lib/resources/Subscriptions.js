// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscriptions',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{subscriptionExposedId}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{subscriptionExposedId}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}',
  }),

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}/discount',
  }),

  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),
});
