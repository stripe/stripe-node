// File generated from our OpenAPI spec
'use strict';
const {multipartRequestDataProcessor} = require('../multipart');
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/files',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/files/{file}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/files',
    methodType: 'list',
  }),
  requestDataProcessor: multipartRequestDataProcessor,
});
