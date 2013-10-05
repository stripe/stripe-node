'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'customers',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
    'setMetadata', 'getMetadata'
  ],

  /**
   * Customer: Subscription methods
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
   * Customer: Card methods
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
   * Customer: Discount methods
   */

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customerId}/discounts/{discountId}',
    urlParams: ['customerId', 'discountId']
  })

});
