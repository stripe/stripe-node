'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'orders',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  pay: stripeMethod({
    method: 'POST',
    path: '/{id}/pay',
    urlParams: ['id'],
  }),

  returnOrder: stripeMethod({
    method: 'POST',
    path: '/{id}/returns',
    urlParams: ['id'],
  }),
});
