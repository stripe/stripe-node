'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'recipients',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  createCard: stripeMethod({
    method: 'POST',
    path: '/{id}/cards',
  }),

  listCards: stripeMethod({
    method: 'GET',
    path: '/{id}/cards',
    methodType: 'list',
  }),

  retrieveCard: stripeMethod({
    method: 'GET',
    path: '/{recipientId}/cards/{cardId}',
  }),

  updateCard: stripeMethod({
    method: 'POST',
    path: '/{recipientId}/cards/{cardId}',
  }),

  deleteCard: stripeMethod({
    method: 'DELETE',
    path: '/{recipientId}/cards/{cardId}',
  }),
});
