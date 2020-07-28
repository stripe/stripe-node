// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'disputes',

  includeBasic: ['list', 'retrieve', 'update'],

  close: stripeMethod({
    method: 'POST',
    path: '/{dispute}/close',
  }),
});
