// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../StripeResource');

module.exports = StripeResource.extend({
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/setup_attempts',
    methodType: 'list',
  }),
});
