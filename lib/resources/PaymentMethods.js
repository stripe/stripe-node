'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'payment_methods',
  includeBasic: ['create', 'list', 'retrieve', 'update'],

  attach: stripeMethod({
    method: 'POST',
    path: '{paymentMethodId}/attach',
    urlParams: ['paymentMethodId'],
  }),

  detach: stripeMethod({
    method: 'POST',
    path: '{paymentMethodId}/detach',
    urlParams: ['paymentMethodId'],
  }),
});
