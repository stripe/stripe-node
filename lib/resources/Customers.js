'use strict';

var StripeResource = require('../StripeResource');
var utils = require('../utils');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'customers',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
    'setMetadata', 'getMetadata',
  ],

  /**
   * Customer: Subscription methods
   */

  _legacyUpdateSubscription: stripeMethod({
    method: 'POST',
    path: '{customerId}/subscription',
    urlParams: ['customerId'],
  }),

  _newstyleUpdateSubscription: stripeMethod({
    method: 'POST',
    path: '/{customerId}/subscriptions/{subscriptionId}',
    urlParams: ['customerId', 'subscriptionId'],
  }),

  _legacyCancelSubscription: stripeMethod({
    method: 'DELETE',
    path: '{customerId}/subscription',
    urlParams: ['customerId'],
  }),

  _newstyleCancelSubscription: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/subscriptions/{subscriptionId}',
    urlParams: ['customerId', 'subscriptionId'],
  }),

  createSubscription: stripeMethod({
    method: 'POST',
    path: '/{customerId}/subscriptions',
    urlParams: ['customerId'],
  }),

  listSubscriptions: stripeMethod({
    method: 'GET',
    path: '/{customerId}/subscriptions',
    urlParams: ['customerId'],
  }),

  retrieveSubscription: stripeMethod({
    method: 'GET',
    path: '/{customerId}/subscriptions/{subscriptionId}',
    urlParams: ['customerId', 'subscriptionId'],
  }),

  updateSubscription: function(customerId, subscriptionId) {
    if (typeof subscriptionId == 'string') {
      return this._newstyleUpdateSubscription.apply(this, arguments);
    } else {
      return this._legacyUpdateSubscription.apply(this, arguments);
    }
  },

  cancelSubscription: function(customerId, subscriptionId) {
    // This is a hack, but it lets us maximize our overloading.
    // Precarious assumption: If it's not an auth key it _could_ be a sub id:
    if (typeof subscriptionId == 'string' && !utils.isAuthKey(subscriptionId)) {
      return this._newstyleCancelSubscription.apply(this, arguments);
    } else {
      return this._legacyCancelSubscription.apply(this, arguments);
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

});
