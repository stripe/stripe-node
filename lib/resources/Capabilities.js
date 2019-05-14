'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'accounts/{accountId}/capabilities',
  includeBasic: ['list', 'retrieve', 'update'],
});

