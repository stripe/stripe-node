'use strict';

module.exports = require('../StripeResource').extend({
  path: 'plans',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],
});

