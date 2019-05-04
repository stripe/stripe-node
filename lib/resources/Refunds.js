'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'refunds',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
