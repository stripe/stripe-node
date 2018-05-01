'use strict';

var stripeMethod = require('../StripeMethod');

module.exports = require('../StripeResource').extend({
  path: 'subscription_items',
  create: function() {
    var args = Array.prototype.slice.call(arguments);

    var reqArgs = args.shift();
    var requestPath = reqArgs.subscription_item + '/usage_records';

    delete reqArgs.subscription_item;

    args.unshift(reqArgs);

    return stripeMethod({
      method: 'POST',
      path: requestPath
    }).apply(this, args);
  }
});
