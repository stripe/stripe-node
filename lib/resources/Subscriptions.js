'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscriptions',

  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{subscription_exposed_id}/discount',
    urlParams: ['subscription_exposed_id'],
  }),
});
