'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const SCHEDULE_TEST_ID = 'sub_sched_123';

describe('Subscription Schedule Resource', () => {
  describe('cancel', () => {
    it('Sends the correct request', () => {
      const data = {
        invoice_now: true,
      };
      stripe.subscriptionSchedules.cancel(SCHEDULE_TEST_ID, data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/subscription_schedules/${SCHEDULE_TEST_ID}/cancel`,
        data,
        headers: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        customer: 'cus_123',
      };
      stripe.subscriptionSchedules.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_schedules',
        data,
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.subscriptionSchedules.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules',
        data: {},
        headers: {},
      });
    });
  });

  describe('release', () => {
    it('Sends the correct request', () => {
      const data = {
        preserve_cancel_date: true,
      };
      stripe.subscriptionSchedules.release(SCHEDULE_TEST_ID, data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/subscription_schedules/${SCHEDULE_TEST_ID}/release`,
        data,
        headers: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.subscriptionSchedules.retrieve(SCHEDULE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules/sub_sched_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      const data = {metadata: {key: 'value'}};
      stripe.subscriptionSchedules.update(SCHEDULE_TEST_ID, data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/subscription_schedules/${SCHEDULE_TEST_ID}`,
        data,
        headers: {},
      });
    });
  });
});
