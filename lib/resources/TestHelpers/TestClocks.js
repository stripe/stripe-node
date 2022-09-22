// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'test_helpers/test_clocks',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{testClock}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{testClock}',
  }),
  advance: stripeMethod({
    method: 'POST',
    path: '/{testClock}/advance',
  }),
});
