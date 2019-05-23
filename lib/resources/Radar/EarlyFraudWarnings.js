'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'radar/early_fraud_warnings',

  includeBasic: ['list', 'retrieve'],
});
