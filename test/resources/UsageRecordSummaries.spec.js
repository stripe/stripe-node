'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('UsageRecordSummaries Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.usageRecordSummaries.list('si_123', {});

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_items/si_123/usage_record_summaries',
        headers: {},
        data: {},
      });
    });

    it('Includes any options that were provided', (done) => {
      stripe.usageRecordSummaries
        .list(
          'si_123',
          {},
          {
            stripe_account: 'acct_456',
          }
        )
        .then((record) => {
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'GET',
            url: '/v1/subscription_items/si_123/usage_record_summaries',
            headers: {
              'Stripe-Account': 'acct_456',
            },
            data: {},
          });

          done();
        });
    });

    it('Calls a given callback', (done) => {
      stripe.usageRecordSummaries.list('si_123', {}, (error, record) => {
        done(error);
      });
    });
  });
});
