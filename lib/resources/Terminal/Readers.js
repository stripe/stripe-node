// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/readers/{reader}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/readers',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/readers/{reader}',
  }),
  cancelAction: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/cancel_action',
  }),
  processPaymentIntent: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/process_payment_intent',
  }),
  processSetupIntent: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/process_setup_intent',
  }),
  setReaderDisplay: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/set_reader_display',
  }),
});
