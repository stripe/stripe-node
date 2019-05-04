'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'order_returns',

  includeBasic: ['list', 'retrieve'],
});
