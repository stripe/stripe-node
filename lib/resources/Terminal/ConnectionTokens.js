'use strict';

var StripeResource = require('../../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'terminal/connection_tokens',
  includeBasic: ['create'],
})
