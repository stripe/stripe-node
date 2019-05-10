'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_intents',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{id}/cancel',
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '/{id}/capture',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{id}/confirm',
  }),
});
