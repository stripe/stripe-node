'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_intents',
  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '{paymentIntentId}/cancel',
    urlParams: ['paymentIntentId'],
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '{paymentIntentId}/capture',
    urlParams: ['paymentIntentId'],
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '{paymentIntentId}/confirm',
    urlParams: ['paymentIntentId'],
  }),
});

