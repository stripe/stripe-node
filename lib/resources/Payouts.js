// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payouts',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{payout}/cancel',
  }),

  reverse: stripeMethod({
    method: 'POST',
    path: '/{payout}/reverse',
  }),
});
