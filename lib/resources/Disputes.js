// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'disputes',

  includeBasic: ['retrieve', 'update', 'list'],

  close: stripeMethod({
    method: 'POST',
    path: '/{dispute}/close',
  }),
});
