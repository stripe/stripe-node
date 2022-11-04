// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_credits/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_credits',
    methodType: 'list',
  }),
});
