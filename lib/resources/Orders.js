'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

module.exports = StripeResource.extend({

  path: 'orders',

  includeBasic: [
    'list', 'retrieve', 'update'
  ],

  create: stripeMethod({
    method: 'POST',
    required: ['currency']
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '/{id}/pay',
    urlParams: ['id']
  }),

});
