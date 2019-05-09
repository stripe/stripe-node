'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'apple_pay/domains',

  includeBasic: ['create', 'del', 'list', 'retrieve'],
});
