'use strict';

module.exports = require('../StripeResource').extend({
  path: 'apple_pay/domains',
  includeBasic: ['create', 'del', 'list', 'retrieve'],
});
