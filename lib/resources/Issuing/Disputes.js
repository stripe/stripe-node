'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'issuing/disputes',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],
});
