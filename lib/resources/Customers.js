'use strict';

var StripeResource = require('../StripeResource');
var utils = require('../utils');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',
  includeBasic: [
    'create',
    'del',
    'list',
    'retrieve',
    'update',
    'setMetadata',
    'getMetadata',
  ],

  /**
   * Customer: Subscription methods
   */

  _legacyUpdateSubscription: stripeMethod({
    method: 'POST',
    path: '{id}/subscription',
    urlParams: ['id'],
  }),

  _newstyleUpdateSubscription: stripeMethod({
    method: 'POST',
    path: '/{customerId}/subscriptions/{subscriptionId}',
    urlParams: ['customerId', 'subscriptionId'],
  }),

  _legacyCancelSubscription: stripeMethod({
    method: 'DELETE',
    path: '{id}/subscription',
    urlParams: ['id'],
  }),

  _newstyleCancelSubscription: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/subscriptions/{subscriptionId}',
    urlParams: ['customerId', 'subscriptionId'],
  }),

  createSubscription: stripeMethod({
    method: 'POST',
    path: '/{id}/subscriptions',
    urlParams: ['id'],
  }),

  listSubscriptions: stripeMethod({
    method: 'GET',
    path: '/{id}/subscriptions',
    urlParams: ['id'],
    methodType: 'list',
  }),

  retrieveSubscription: stripeMethod({
    method: 'GET',
    path: '/{customerId}/subscriptions/{subscriptionId}',
    urlParams: ['customerId', 'subscriptionId'],
  }),

  updateSubscription(customerId, subscriptionId) {
    if (typeof subscriptionId == 'string') {
      return this._newstyleUpdateSubscription(...arguments);
    } else {
      return this._legacyUpdateSubscription(...arguments);
    }
  },

  cancelSubscription(customerId, subscriptionId) {
    // This is a hack, but it lets us maximize our overloading.
    // Precarious assumption: If it's not an auth key it _could_ be a sub id:
    if (typeof subscriptionId == 'string' && !utils.isAuthKey(subscriptionId)) {
      return this._newstyleCancelSubscription(...arguments);
    } else {
      return this._legacyCancelSubscription(...arguments);
    }
  },

  /**
   * Customer: Card methods
   */

  createCard: stripeMethod({
    method: 'POST',
    path: '/{customerId}/cards',
    urlParams: ['customerId'],
  }),

  listCards: stripeMethod({
    method: 'GET',
    path: '/{customerId}/cards',
    urlParams: ['customerId'],
    methodType: 'list',
  }),

  retrieveCard: stripeMethod({
    method: 'GET',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId'],
  }),

  updateCard: stripeMethod({
    method: 'POST',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId'],
  }),

  deleteCard: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId'],
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
   * Customer: Discount methods
   */

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/discount',
    urlParams: ['customerId'],
  }),

  deleteSubscriptionDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/subscriptions/{subscriptionId}/discount',
    urlParams: ['customerId', 'subscriptionId'],
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
