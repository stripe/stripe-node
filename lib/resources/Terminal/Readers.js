'use strict';

var StripeResource = require('../../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'terminal/readers',
  includeBasic: ['create', 'list', 'retrieve', 'update'],
})
