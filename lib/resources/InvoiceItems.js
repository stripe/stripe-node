'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'invoiceitems',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
