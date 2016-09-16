'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'subscription_items',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del',],
});

