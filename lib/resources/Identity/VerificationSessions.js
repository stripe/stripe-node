// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'identity/verification_sessions',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{session}/cancel',
  }),

  redact: stripeMethod({
    method: 'POST',
    path: '/{session}/redact',
  }),
});
