'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'topups',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],
});
