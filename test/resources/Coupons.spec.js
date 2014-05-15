'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Coupons Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.coupons.retrieve('couponId123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons/couponId123',
        data: {}
      });

    });

  });

  describe('del', function() {

    it('Sends the correct request', function() {

      stripe.coupons.del('couponId123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/coupons/couponId123',
        data: {}
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.coupons.update('couponId123', {
        metadata: { a: '1234' }
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons/couponId123',
        data: {
          metadata: { a: '1234' }
        }
      });
    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.coupons.create({
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 4
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons',
        data: {
          percent_off: 25,
          duration: 'repeating',
          duration_in_months: 4
        }
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.coupons.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons',
        data: {}
      });

    });

  });

});
