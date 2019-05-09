'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'accounts/{account}/login_links',

  includeBasic: ['create'],
});
