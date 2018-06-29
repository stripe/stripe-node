'use strict';

var StripeResource = require('../StripeResource');
var utils = require('../utils');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'subscriptions',
  includeBasic: ['list', 'retrieve', 'del',],

  create: stripeMethod({
    method: 'POST',
    encode: utils.encodeParamWithIntegerIndexes.bind(null, 'items'),
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
    urlParams: ['id'],
    encode: utils.encodeParamWithIntegerIndexes.bind(null, 'items'),
  }),

  /**
   * Subscription: Discount methods
   */
  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionId}/discount',
    urlParams: ['subscriptionId'],
  }),
});
