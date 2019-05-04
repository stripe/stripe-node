'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Review Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.reviews.retrieve('prv_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/reviews/prv_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.reviews.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/reviews',
        data: {},
        headers: {},
      });
    });
  });

  describe('approve', () => {
    it('Sends the correct request', () => {
      stripe.reviews.approve('prv_123', {amount: 23});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/reviews/prv_123/approve',
        headers: {},
        data: {amount: 23},
      });
    });
  });
});
