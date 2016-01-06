'use strict';

module.exports = require('../StripeResource').extend({
  path: 'invoiceitems',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
    'setMetadata', 'getMetadata',
  ],
});

