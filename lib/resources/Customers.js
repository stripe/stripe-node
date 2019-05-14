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
  }),

  /**
   * Customer: Source methods
   */

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customerId}/sources',
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customerId}/sources',
    methodType: 'list',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customerId}/sources/{sourceId}',
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customerId}/sources/{sourceId}',
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/sources/{sourceId}',
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customerId}/sources/{sourceId}/verify',
  }),

  /**
   * Customer: TaxId methods
   */

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customerId}/tax_ids',
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/tax_ids/{taxIdId}',
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customerId}/tax_ids',
    methodType: 'list',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customerId}/tax_ids/{taxIdId}',
  }),
});
