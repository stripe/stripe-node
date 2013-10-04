'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'customers',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  /**
   * Customer:Subscription methods
   * =============================
   */

  updateSubscription: stripeMethod({
    method: 'POST',
    path: '{customerId}/subscription',
    urlParams: ['customerId']
  }),

  cancelSubscription: stripeMethod({
    method: 'DELETE',
    path: '{customerId}/subscription',
    urlParams: ['customerId']
  }),

  /**
   * Customer:Card methods
   * =====================
   * TODO: Discuss whether this is needed.
   */

  createCard: stripeMethod({
    method: 'POST',
    path: '/{customerId}/cards',
    urlParams: ['customerId']
  }),

  listCards: stripeMethod({
    method: 'GET',
    path: '/{customerId}/cards',
    urlParams: ['customerId']
  }),

  retrieveCard: stripeMethod({
    method: 'GET',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId']
  }),

  updateCard: stripeMethod({
    method: 'POST',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId']
  }),

  deleteCard: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId']
  }),

  /**
   * Customer:Discount methods
   * =========================
   */

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/discounts/{discountId}',
    urlParams: ['customerId', 'discountId']
  }),

  /**
   * Customer:Metadata methods
   * =========================
   */

  setMetadata: stripeMethod({
    method: 'POST',
    path: '/{customerId}',
    urlParams: ['customerId'],
    transformRequestData: function(data) {
      return {
        metadata: data == null ? '' : data
      };
    },
    makeRequest: function(urlData, data, continueWithOriginalRequest) {

      if (Object.keys(data.metadata).length > 0) {
        // If there is data we need to wipe current metadata before
        // we continue with the original request (of setting new metadata):
        return this.setMetadata(urlData.customerId, null).then(function() {
          return continueWithOriginalRequest();
        });
      } else {
        return continueWithOriginalRequest();
      }

    },
    transformResponseData: function(data) {
      return data.metadata;
    }
  }),

  getMetadata: stripeMethod({
    method: 'GET',
    path: '/{customerId}',
    urlParams: ['customerId'],
    transformResponseData: function(data) {
      return data.metadata;
    }
  })

});
