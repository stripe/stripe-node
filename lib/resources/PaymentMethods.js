'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_methods',
  includeBasic: ['create', 'list', 'retrieve', 'update'],

  attach: stripeMethod({
    method: 'POST',
    path: '{id}/attach',
    urlParams: ['id'],
  }),

  detach: stripeMethod({
    method: 'POST',
    path: '{id}/detach',
    urlParams: ['id'],
  }),
});
