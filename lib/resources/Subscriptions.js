

const StripeResource = require('../StripeResource');
const utils = require('../utils');

const stripeMethod = StripeResource.method;

function encode(data) {
  if (data.items !== undefined) {
    data.items = utils.arrayToObject(data.items);
  }
  return data;
}

module.exports = StripeResource.extend({

  path: 'subscriptions',
  includeBasic: ['list', 'retrieve', 'del'],

  create: stripeMethod({
    method: 'POST',
    encode,
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
    urlParams: ['id'],
    encode,
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
