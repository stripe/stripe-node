'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscriptions',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  /**
   * Subscription: Discount methods
   */
  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{id}/discount',
    urlParams: ['id'],
  }),
});
