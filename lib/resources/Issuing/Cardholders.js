'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'issuing/cardholders',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
