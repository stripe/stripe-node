'use strict';

module.exports = require('../StripeResource').extend({
  path: 'account',
  includeBasic: ['retrieve']
});

