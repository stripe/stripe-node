'use strict';

module.exports = require('../StripeResource').extend({
  path: 'checkout_sessions',
  includeBasic: ['create'],
});

