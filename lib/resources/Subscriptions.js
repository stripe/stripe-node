'use strict';

var StripeResource = require('../StripeResource');
var utils = require('../utils');
var stripeMethod = StripeResource.method;

function encode(data) {
  if (data.items !== undefined) {
    data.items = utils.arrayToObject(data.items);
  }
  return data;
}

module.exports = StripeResource.extend({

  path: 'subscriptions',
  includeBasic: ['list', 'retrieve', 'del',],

  create: stripeMethod({
    method: 'POST',
    encode: encode,
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
    urlParams: ['id'],
    encode: encode,
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
