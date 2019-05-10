'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'transfers/{id}/reversals',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
