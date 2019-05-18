'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_schedules',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{schedule}/cancel',
  }),

  release: stripeMethod({
    method: 'POST',
    path: '/{schedule}/release',
  }),

  listRevisions: stripeMethod({
    method: 'GET',
    path: '/{schedule}/revisions',
    methodType: 'list',
  }),

  retrieveRevision: stripeMethod({
    method: 'GET',
    path: '/{schedule}/revisions/{revision}',
  }),
});
