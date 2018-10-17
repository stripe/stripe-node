'use strict';

module.exports = require('../StripeResource').extend({
  path: 'webhook_endpoints',
  includeBasic: ['create', 'list', 'update', 'retrieve', 'del'],
});

