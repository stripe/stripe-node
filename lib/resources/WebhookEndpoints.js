'use strict';

module.exports = require('../StripeResource').extend({
  path: 'webhook_endpoints',
  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
