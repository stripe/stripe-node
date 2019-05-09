'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'accounts/{account}/persons',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
