'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_items',

  list: stripeMethod({
    method: 'GET',
    path: '{subscriptionItem}/usage_record_summaries',
    urlParams: ['subscriptionItem'],
    methodType: 'list',
  }),
});
