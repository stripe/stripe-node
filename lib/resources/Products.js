'use strict';

var StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({

  path: 'products',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

});
