'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'balance_transactions',

  includeBasic: ['list', 'retrieve'],
});
