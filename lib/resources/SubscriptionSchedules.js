// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_schedules',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{schedule}/cancel',
  }),

  release: stripeMethod({
    method: 'POST',
    path: '/{schedule}/release',
  }),
});
