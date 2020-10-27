// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'orders',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  pay: stripeMethod({
    method: 'POST',
    path: '/{id}/pay',
  }),

  returnOrder: stripeMethod({
    method: 'POST',
    path: '/{id}/returns',
  }),
});
