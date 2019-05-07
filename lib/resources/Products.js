'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'products',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
