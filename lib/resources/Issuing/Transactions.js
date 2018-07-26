'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'issuing/transactions',
  includeBasic: ['list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],
});
