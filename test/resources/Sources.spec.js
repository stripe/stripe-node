'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Sources Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.sources.retrieve('sourceId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/sources/sourceId1',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
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

  describe('update', () => {
    it('Sends the correct request', () => {
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

  describe('listSourceTransactions', () => {
    it('Sends the correct request', () => {
      stripe.sources.listSourceTransactions('src_foo');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/sources/src_foo/source_transactions',
        headers: {},
        data: {},
      });
    });
  });

  describe('verify', () => {
    it('Sends the correct request', () => {
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
