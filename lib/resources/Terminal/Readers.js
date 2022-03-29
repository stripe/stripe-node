// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'terminal/readers',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{reader}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{reader}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{reader}',
  }),

  cancelAction: stripeMethod({
    method: 'POST',
    path: '/{reader}/cancel_action',
  }),

  processPaymentIntent: stripeMethod({
    method: 'POST',
    path: '/{reader}/process_payment_intent',
  }),

  processSetupIntent: stripeMethod({
    method: 'POST',
    path: '/{reader}/process_setup_intent',
  }),

  setReaderDisplay: stripeMethod({
    method: 'POST',
    path: '/{reader}/set_reader_display',
  }),
});
