'use strict';

module.exports = require('../StripeResource').extend({
  path: 'account_links',
  includeBasic: ['create'],
});

