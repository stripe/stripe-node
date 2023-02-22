// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../StripeResource');

module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
  }),

  resume: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/resume',
  }),

  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/search',
    methodType: 'search',
  }),
});
