'use strict';

module.exports = require('../StripeResource').extend({
  path: 'plans',
  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
