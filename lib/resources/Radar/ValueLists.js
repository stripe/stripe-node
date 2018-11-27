'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'radar/value_lists',
  includeBasic: ['create', 'list', 'update', 'retrieve', 'del'],
});
