'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'accounts/{accountId}/persons',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
