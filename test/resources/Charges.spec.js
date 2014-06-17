'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Charge Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.charges.retrieve('chargeIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdFoo123',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.charges.create({
        amount: '1500', currency: 'usd'
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges',
        data: { amount: '1500', currency: 'usd' }
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.charges.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges',
        data: {}
      });

    });

  });

  describe('capture', function() {

    it('Sends the correct request', function() {

      stripe.charges.capture('chargeIdExample3242', { amount: 23 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/capture',
        data: { amount: 23 }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.charges.update('chargeIdExample3242', { description: 'foo321' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        data: { description: 'foo321' }
      });

    });

  });

  describe('refund', function() {

    it('Sends the correct request', function() {

      stripe.charges.refund('chargeIdExample3242', { amount: 23 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refund',
        data: { amount: 23 }
      });

    });

    it('Throws an error on incorrect arguments', function() {
      expect(function() {
        stripe.charges.refund('chargeIdExample123', 39392);
      }).to.throw(/unknown arguments/i);
    });

  });

  describe('refunds', function() {

    it('Sends the correct update request', function() {

      stripe.charges.updateRefund(
        'chargeIdExample3242',
        'refundIdExample2312',
        { metadata: {key: 'value'}}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refunds/refundIdExample2312',
        data: { metadata: {key: 'value'}}
      });

    });

    it('Sends the correct create request', function() {

      stripe.charges.createRefund(
        'chargeIdExample3242',
        { amount: 100 }
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refunds',
        data: { amount: 100 }
      });
    });

    it('Sends the correct list request', function() {
      stripe.charges.listRefunds(
        'chargeIdExample3242'
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdExample3242/refunds',
        data: {}
      });
    });

    it('Sends the correct retrieve request', function() {
      stripe.charges.retrieveRefund(
        'chargeIdExample3242',
        'refundIdExample2312'
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdExample3242/refunds/refundIdExample2312',
        data: {}
      });
    });
  });


  describe('updateDispute', function() {

    it('Sends the correct request', function() {

      stripe.charges.updateDispute('chargeIdExample3242', { evidence: 'foo' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute',
        data: { evidence: 'foo' }
      });

    });

  });

  describe('closeDispute', function() {

    it('Sends the correct request', function() {

      stripe.charges.closeDispute('chargeIdExample3242', {});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute/close',
        data: {}
      });

    });

  });

});
