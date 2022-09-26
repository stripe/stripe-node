// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'setup_attempts',
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
