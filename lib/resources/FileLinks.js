'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({

  path: 'file_links',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'setMetadata', 'getMetadata',
  ],
});
