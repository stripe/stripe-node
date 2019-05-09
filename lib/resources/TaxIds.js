'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'customers/{customerId}/tax_ids',

  includeBasic: ['create', 'del', 'list', 'retrieve'],
});
