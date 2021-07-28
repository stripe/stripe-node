// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'account_links',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
});
