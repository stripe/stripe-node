// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/plans',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/plans/{plan}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/plans/{plan}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/plans',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/plans/{plan}',
  }),
});
