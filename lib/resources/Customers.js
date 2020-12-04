// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',

  includeBasic: ['create', 'retrieve', 'update', 'list', 'del'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/discount',
  }),

  createBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions',
  }),

  retrieveBalanceTransaction: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  updateBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  listBalanceTransactions: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions',
    methodType: 'list',
  }),

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources/{id}',
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}',
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources',
    methodType: 'list',
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/sources/{id}',
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}/verify',
  }),

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customer}/tax_ids',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids/{id}',
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids',
    methodType: 'list',
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/tax_ids/{id}',
  }),
});
