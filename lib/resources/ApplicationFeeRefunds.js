'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'application_fees/{feeId}/refunds',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
