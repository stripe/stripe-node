'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'balance/history',

  includeBasic: ['list', 'retrieve'],
});
