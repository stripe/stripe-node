// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'terminal/readers',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{reader}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{reader}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{reader}',
  }),
});
