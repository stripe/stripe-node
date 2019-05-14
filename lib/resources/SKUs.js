'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'skus',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
