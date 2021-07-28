// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/transactions',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{transaction}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{transaction}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
