'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_items',

  list: stripeMethod({
    method: 'GET',
    path: '{subscriptionItem}/usage_record_summaries',
    methodType: 'list',
  }),
});
