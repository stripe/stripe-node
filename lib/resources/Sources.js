'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({

  path: 'sources',

  includeBasic: [
    'create', 'retrieve', 'setMetadata', 'getMetadata',
  ],

});
