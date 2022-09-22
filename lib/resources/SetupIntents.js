// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'setup_intents',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{intent}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{intent}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),
  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),
  verifyMicrodeposits: stripeMethod({
    method: 'POST',
    path: '/{intent}/verify_microdeposits',
  }),
});
