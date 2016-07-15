'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Sources Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.sources.retrieve('sourceId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/sources/sourceId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.sources.create({
        amount: 200,
        currency: 'usd',
        receiver: {
          refund_attributes_method: 'email',
        },
        bitcoin: {
          refund_address: 'refundAddress1',
        },
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/sources',
        headers: {},
        data: {
          amount: 200,
          currency: 'usd',
          receiver: {
            refund_attributes_method: 'email',
          },
          bitcoin: {
            refund_address: 'refundAddress1',
          },
        },
      });
    });
  });
});
