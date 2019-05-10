'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_methods',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  attach: stripeMethod({
    method: 'POST',
    path: '/{payment_method}/attach',
    urlParams: ['payment_method'],
  }),

  detach: stripeMethod({
    method: 'POST',
    path: '/{payment_method}/detach',
    urlParams: ['payment_method'],
  }),
});
