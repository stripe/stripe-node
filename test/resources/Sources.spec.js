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

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.sources.update('src_foo', {
        metadata: {foo: 'bar'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/sources/src_foo',
        headers: {},
        data: {metadata: {foo: 'bar'}},
      });
    });
  });

  describe('verify', function() {
    it('Sends the correct request', function() {
      stripe.sources.verify('src_foo', {values: [32, 45]});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/sources/src_foo/verify',
        headers: {},
        data: {values: [32, 45]},
      });
    });
  });
});
