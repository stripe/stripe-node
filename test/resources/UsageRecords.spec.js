'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

describe('UsageRecords Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.usageRecords.create('si_123', {
        quantity: 123,
        timestamp: 123321,
        action: 'increment',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_items/si_123/usage_records',
        headers: {},
        data: {
          quantity: 123,
          timestamp: 123321,
          action: 'increment',
        },
      });
    });

    it('Includes any options that were provided', (done) => {
      stripe.usageRecords
        .create(
          'si_123',
          {
            quantity: 123,
            timestamp: 123321,
            action: 'increment',
          },
          {
            stripe_account: 'acct_456',
          }
        )
        .then((record) => {
          expect(stripe.LAST_REQUEST).to.deep.equal({
            method: 'POST',
            url: '/v1/subscription_items/si_123/usage_records',
            headers: {
              'Stripe-Account': 'acct_456',
            },
            data: {
              quantity: 123,
              timestamp: 123321,
              action: 'increment',
            },
          });

          done();
        });
    });

    it('Calls a given callback', (done) => {
      stripe.usageRecords.create(
        'si_123',
        {
          quantity: 123,
          timestamp: 123321,
          action: 'increment',
        },
        (error, record) => {
          done(error);
        }
      );
    });
  });
});
