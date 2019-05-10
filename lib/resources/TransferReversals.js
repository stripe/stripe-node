'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'transfers/{transferId}/reversals',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
