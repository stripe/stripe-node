'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_intents',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
    urlParams: ['intent'],
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '/{intent}/capture',
    urlParams: ['intent'],
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
    urlParams: ['intent'],
  }),
});
