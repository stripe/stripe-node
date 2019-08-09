'use strict';

const {multipartRequestDataProcessor} = require('../multipart');
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'files',

  includeBasic: ['list', 'retrieve'],

  requestDataProcessor: multipartRequestDataProcessor,

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),
});
