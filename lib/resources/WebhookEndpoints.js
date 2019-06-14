'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'webhook_endpoints',

  includeBasic: ['create', 'list'],
});
