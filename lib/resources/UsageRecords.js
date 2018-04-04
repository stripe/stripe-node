'use strict';

var stripeMethod = require('../StripeMethod');

module.exports = require('../StripeResource').extend({
  path: 'subscription_items',
  create: function(args) {
    var requestPath = args.subscription_item + '/usage_records';
    var reqArgs = Object.assign({}, args);
    delete reqArgs.subscription_item;
    return stripeMethod({
      method: 'POST',
      path: requestPath
    }).bind(this)(reqArgs);
  }
});
