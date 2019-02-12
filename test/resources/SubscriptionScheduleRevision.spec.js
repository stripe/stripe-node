'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var SCHEDULE_TEST_ID = 'sub_sched_123';
var REVISION_TEST_ID = 'sub_sched_rev_123';

// Create new SubscriptionScheduleRevision instance with pre-filled scheduleId:
var revision = new resources.SubscriptionScheduleRevisions(
  stripe,
  {scheduleId: SCHEDULE_TEST_ID}
);

// Use spy from existing resource:
revision._request = stripe.customers._request;

describe('SubscriptionScheduleRevision Resource', function() {
  describe('list', function() {
    it('Sends the correct request', function() {
      revision.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules/' + SCHEDULE_TEST_ID + '/revisions',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      revision.retrieve(REVISION_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules/' + SCHEDULE_TEST_ID + '/revisions/' + REVISION_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });
});

