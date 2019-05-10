'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'application_fees',

  includeBasic: ['list', 'retrieve'],

  createRefund: stripeMethod({
    method: 'POST',
    path: '/{id}/refunds',
    urlParams: ['id'],
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{id}/refunds',
    urlParams: ['id'],
    methodType: 'list',
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{fee}/refunds/{id}',
    urlParams: ['fee', 'id'],
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{fee}/refunds/{id}',
    urlParams: ['fee', 'id'],
  }),
});
