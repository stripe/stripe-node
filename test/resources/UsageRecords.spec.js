'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('UsageRecords Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.usageRecords.create({
        subscription_item: 'si_123',
        quantity: 123,
        timestmap: 123321,
        action: 'increment'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_items/si_123/usage_records',
        headers: {},
        data: {
          quantity: 123,
          timestmap: 123321,
          action: 'increment'
        }
      });
    });
  });
});
