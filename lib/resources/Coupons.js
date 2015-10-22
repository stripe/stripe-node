'use strict';

module.exports = require('../StripeResource').extend({
  path: 'coupons',
  includeBasic: ['create', 'list', 'update', 'retrieve', 'del'],
});

