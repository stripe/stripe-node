'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

module.exports = StripeResource.extend({

  path: 'skus',

  includeBasic: [
    'list', 'retrieve', 'update'
  ],
  
  create: stripeMethod({
    method: 'POST',
    required: ['currency', 'inventory', 'price', 'product']
  }),

});
