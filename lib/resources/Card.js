'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

/**
 * Provides unpopulated card resource endpoints (unlike CustomerCard)
 * meaning that each method required at least a customerId
 */
module.exports = StripeResource.extend({

  path: 'customers',

  create: stripeMethod({
    method: 'POST',
    path: '{customerId}/cards',
    urlParams: ['customerId']
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId']
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId']
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '{customerId}/cards/{cardId}',
    urlParams: ['customerId', 'cardId']
  }),

  list: stripeMethod({
    method: 'GET',
    path: '{customerId}/cards',
    urlParams: ['customerId']
  })

});
