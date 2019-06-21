'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  balanceTransactions: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions',
  }),

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/discount',
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}',
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/sources/{id}',
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{sourceId}/verify',
  }),

  createCustomerBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions',
  }),

  listCustomerBalanceTransactions: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions',
    methodType: 'list',
  }),

  retrieveCustomerBalanceTransaction: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  updateCustomerBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources',
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources',
    methodType: 'list',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources/{id}',
  }),

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customer}/tax_ids',
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/tax_ids/{id}',
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids',
    methodType: 'list',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids/{id}',
  }),
});
