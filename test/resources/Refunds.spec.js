'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Refund Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.refunds.create({
        amount: '300',
        charge: 'ch_123',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds',
        headers: {},
        data: {
          amount: '300',
          charge: 'ch_123',
        },
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.refunds.retrieve('re_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds/re_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.refunds.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.refunds.update('re_123', {metadata: {key: 'abcd'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds/re_123',
        headers: {},
        data: {metadata: {key: 'abcd'}},
      });
    });
  });
});
