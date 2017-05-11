'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'accounts/{accountId}/login_links',
  includeBasic: ['create'],
});
