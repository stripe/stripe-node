// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'identity/verification_sessions',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{session}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{session}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    path: '/{session}/cancel',
  }),
  redact: stripeMethod({
    method: 'POST',
    path: '/{session}/redact',
  }),
});
