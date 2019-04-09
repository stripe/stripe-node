'use strict';

module.exports = require('../StripeResource').extend({
  path: 'tax_rates',
  includeBasic: ['create', 'list', 'update', 'retrieve'],
});

