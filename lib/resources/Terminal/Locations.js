'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'terminal/locations',
  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
