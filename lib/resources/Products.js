'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'products',

  includeBasic: [
    'list', 'retrieve', 'update', 'del',
  ],

  create: stripeMethod({
    method: 'POST',
    required: ['name'],
  }),

});
