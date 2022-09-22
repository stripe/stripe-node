// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'billing_portal/configurations',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{configuration}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{configuration}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
