'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: '3d_secure',

  includeBasic: [
    'create',
    'retrieve',
  ],
});
