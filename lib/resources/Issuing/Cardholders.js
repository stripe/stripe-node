'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'issuing/cardholders',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],
});
