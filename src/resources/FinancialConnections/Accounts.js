// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts/{account}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts',
    methodType: 'list',
  }),

  disconnect: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/disconnect',
  }),

  listOwners: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts/{account}/owners',
    methodType: 'list',
  }),

  refresh: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/refresh',
  }),
});
