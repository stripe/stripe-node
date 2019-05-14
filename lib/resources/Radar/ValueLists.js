'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'radar/value_lists',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});
