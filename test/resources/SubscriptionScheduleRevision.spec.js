'use strict';

const resources = require('../../lib/stripe').resources;
const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const SCHEDULE_TEST_ID = 'sub_sched_123';
const REVISION_TEST_ID = 'sub_sched_rev_123';

// Create new SubscriptionScheduleRevision instance with pre-filled scheduleId:
const revision = new resources.SubscriptionScheduleRevisions(stripe, {
  scheduleId: SCHEDULE_TEST_ID,
});

// Use spy from existing resource:
revision._request = stripe.customers._request;

describe('SubscriptionScheduleRevision Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      revision.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules/' + SCHEDULE_TEST_ID + '/revisions',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      revision.retrieve(REVISION_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url:
          '/v1/subscription_schedules/' +
          SCHEDULE_TEST_ID +
          '/revisions/' +
          REVISION_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });
});
