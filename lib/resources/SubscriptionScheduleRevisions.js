'use strict';

var StripeResource = require('../StripeResource');

/**
 * SubscriptionScheduleRevisions is a unique resource in that, upon instantiation,
 * requires a subscription schedule id, and therefore each of its methods only
 * require the scheduleId argument.
 *
 * This streamlines the API specifically for the case of accessing a revision
 * on a returned subscription schedule object.
 *
 * E.g. scheduleObject.revisions.retrieve(revisionId)
 * (As opposed to the also-supported stripe.subscriptionSchedules.retrieveRevision(scheduleId,
 * revisionId))
 */
module.exports = StripeResource.extend({
  path: 'subscription_schedules/{scheduleId}/revisions',
  includeBasic: ['list', 'retrieve',],
});
