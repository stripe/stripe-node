'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'issuer_fraud_records',

  includeBasic: ['list', 'retrieve'],
});
