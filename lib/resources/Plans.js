'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'plans',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
