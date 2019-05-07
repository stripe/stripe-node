'use strict';

module.exports = require('../StripeResource').extend({
  path: 'balance/history',
  includeBasic: ['list', 'retrieve'],
});
