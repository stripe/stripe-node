'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'coupons',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
