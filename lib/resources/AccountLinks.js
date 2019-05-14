'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'account_links',

  includeBasic: ['create'],
});
