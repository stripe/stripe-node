// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_methods',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  attach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/attach',
  }),

  detach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/detach',
  }),
});
