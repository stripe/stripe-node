'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Coupons Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.coupons.retrieve('couponId123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.coupons.del('couponId123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.coupons.update('couponId123', {
        metadata: {a: '1234'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {
          metadata: {a: '1234'},
        },
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.coupons.create({
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 4,
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons',
        headers: {},
        data: {
          percent_off: 25,
          duration: 'repeating',
          duration_in_months: 4,
        },
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.coupons.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons',
        headers: {},
        data: {},
      });
    });
  });
});
