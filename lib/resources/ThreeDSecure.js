'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({

  path: '3d_secure',

  includeBasic: [
    'create',
    'retrieve',
  ],
});
