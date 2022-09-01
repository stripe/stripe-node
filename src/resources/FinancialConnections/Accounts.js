// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'financial_connections/accounts',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{account}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  disconnect: stripeMethod({
    method: 'POST',
    path: '/{account}/disconnect',
  }),

  listOwners: stripeMethod({
    method: 'GET',
    path: '/{account}/owners',
    methodType: 'list',
  }),

  refresh: stripeMethod({
    method: 'POST',
    path: '/{account}/refresh',
  }),
});
