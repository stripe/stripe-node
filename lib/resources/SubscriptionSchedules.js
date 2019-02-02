'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'subscription_schedules',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
    'setMetadata', 'getMetadata',
  ],

  release: stripeMethod({
    method: 'POST',
    path: '/{id}/release',
    urlParams: ['id'],
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{id}/cancel',
    urlParams: ['id'],
  }),

  /**
   * SubscriptionSchedules: SubscriptionScheduleRevisions methods
   */

  listRevisions: stripeMethod({
    method: 'GET',
    path: '/{scheduleId}/revisions',
    urlParams: ['scheduleId'],
    methodType: 'list',
  }),

  retrieveRevision: stripeMethod({
    method: 'GET',
    path: '/{scheduleId}/revisions/{revisionId}',
    urlParams: ['scheduleId', 'revisionId'],
  }),
});
