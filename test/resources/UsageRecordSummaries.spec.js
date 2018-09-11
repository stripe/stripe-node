'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('UsageRecordSummaries Resource', function() {
  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.usageRecordSummaries.list('si_123', {});

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_items/si_123/usage_record_summaries',
        headers: {},
        data: {}
      });
    });

    it('Includes any options that were provided', function(done) {
      stripe.usageRecordSummaries.list('si_123', {}, {
        stripe_account: 'acct_456',
      }).then(function(record) {
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/subscription_items/si_123/usage_record_summaries',
          headers: {
            'Stripe-Account': 'acct_456'
          },
          data: {}
        });

        done();
      });
    });

    it('Calls a given callback', function(done) {
      stripe.usageRecordSummaries.list('si_123', {}, function(error, record) {
        done(error);
      });
    });
  });
});
