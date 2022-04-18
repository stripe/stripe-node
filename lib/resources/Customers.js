// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{customer}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{customer}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{customer}',
  }),

  createFundingInstructions: stripeMethod({
    method: 'POST',
    path: '/{customer}/funding_instructions',
  }),

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/discount',
  }),

  listPaymentMethods: stripeMethod({
    method: 'GET',
    path: '/{customer}/payment_methods',
    methodType: 'list',
  }),

  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
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
