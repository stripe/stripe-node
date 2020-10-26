// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscriptions',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}/discount',
  }),
});
