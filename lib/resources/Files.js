// File generated from our OpenAPI spec

'use strict';

const {multipartRequestDataProcessor} = require('../multipart');
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'files',

  includeBasic: ['retrieve', 'list'],

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),

  requestDataProcessor: multipartRequestDataProcessor,
});
