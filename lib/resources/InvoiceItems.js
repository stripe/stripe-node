'use strict';

module.exports = require('../StripeResource').extend({
  path: 'invoiceitems',
  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
