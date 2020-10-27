// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'setup_intents',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),
});
