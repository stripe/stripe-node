'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/discount',
    urlParams: ['customer'],
  }),

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources',
    urlParams: ['customer'],
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources',
    urlParams: ['customer'],
    methodType: 'list',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources/{id}',
    urlParams: ['customer', 'id'],
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}',
    urlParams: ['customer', 'id'],
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/sources/{id}',
    urlParams: ['customer', 'id'],
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{sourceId}/verify',
    urlParams: ['customer', 'sourceId'],
  }),

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customer}/tax_ids',
    urlParams: ['customer'],
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/tax_ids/{id}',
    urlParams: ['customer', 'id'],
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids',
    urlParams: ['customer'],
    methodType: 'list',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids/{id}',
    urlParams: ['customer', 'id'],
  }),
});
