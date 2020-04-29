'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'prices',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
