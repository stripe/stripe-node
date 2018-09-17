'use strict';

var StripeResource = require('../../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'terminal/locations',
  includeBasic: ['create', 'list', 'retrieve', 'update'],
})
