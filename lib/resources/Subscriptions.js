'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

function encode(data) {
  if (Array.isArray(data.items)) {
    var items = {};
    data.items.map(function(item, i) {
      items[i.toString()] = item;
    });
    data.items = items;
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
