'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',
  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  /**
   * Customer: Discount methods
   */

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/discount',
    urlParams: ['customerId'],
  }),

  /**
   * Customer: Source methods
   */

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customerId}/sources',
    urlParams: ['customerId'],
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customerId}/sources',
    urlParams: ['customerId'],
    methodType: 'list',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customerId}/sources/{sourceId}',
    urlParams: ['customerId', 'sourceId'],
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customerId}/sources/{sourceId}',
    urlParams: ['customerId', 'sourceId'],
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/sources/{sourceId}',
    urlParams: ['customerId', 'sourceId'],
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customerId}/sources/{sourceId}/verify',
    urlParams: ['customerId', 'sourceId'],
  }),

  /**
   * Customer: TaxId methods
   */

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customerId}/tax_ids',
    urlParams: ['customerId'],
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/tax_ids/{taxIdId}',
    urlParams: ['customerId', 'taxIdId'],
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customerId}/tax_ids',
    urlParams: ['customerId'],
    methodType: 'list',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customerId}/tax_ids/{taxIdId}',
    urlParams: ['customerId', 'taxIdId'],
  }),
});
