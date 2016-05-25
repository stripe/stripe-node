'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

module.exports = StripeResource.extend({

  path: 'order_returns',

  includeBasic: [
    'list', 'retrieve',
  ],
});
