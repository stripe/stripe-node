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
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.charges.create({
        amount: '1500',
        currency: 'usd',
        shipping: {
          address: {
            line1: 'foo',
          },
        },
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges',
        data: {
          amount: '1500',
          currency: 'usd',
          shipping: {
            address: {
              line1: 'foo',
            },
          },
        },
        headers: {},
      });
    });

    it('Sends the correct request for Bitcoin', function() {
      var receiver = stripe.bitcoinReceivers.create({
        amount: 100,
        currency: 'usd',
        description: 'some details',
        email: 'do+fill_now@stripe.com',
      })

      stripe.charges.create({
        amount: receiver.amount,
        currency: receiver.currency,
        description: receiver.description,
        source: receiver.id,
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges',
        headers: {},
        data: {
          amount: receiver.amount,
          currency: receiver.currency,
          description: receiver.description,
          source: receiver.id,
        },
      })
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.charges.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges',
        data: {},
        headers: {},
      });
    });
  });

  describe('capture', function() {
    it('Sends the correct request', function() {
      stripe.charges.capture('chargeIdExample3242', {amount: 23});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/capture',
        headers: {},
        data: {amount: 23},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.charges.update('chargeIdExample3242', {description: 'foo321'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        headers: {},
        data: {description: 'foo321'},
      });
    });
  });

  describe('refund', function() {
    it('Sends the correct request', function() {
      stripe.charges.refund('chargeIdExample3242', {amount: 23});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refund',
        headers: {},
        data: {amount: 23},
      });
    });

    it('Incorrect arguments result in an error', function() {
      expect(
        stripe.charges.refund('chargeIdExample123', 39392)
      ).to.be.eventually.rejectedWith(/unknown arguments/i);

      expect(
        stripe.charges.refund({potato: 'chargeIdExample123'})
      ).to.be.eventually.rejectedWith(/must be a string, but got: object/i);

      expect(
        stripe.charges.refund(442)
      ).to.be.eventually.rejectedWith(/must be a string, but got: number/i);
    });
  });

  describe('refunds', function() {
    it('Sends the correct update request', function() {
      stripe.charges.updateRefund(
        'chargeIdExample3242',
        'refundIdExample2312',
        {metadata: {key: 'value'}}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refunds/refundIdExample2312',
        headers: {},
        data: {metadata: {key: 'value'}},
      });
    });

    it('Sends the correct create request', function() {
      stripe.charges.createRefund(
        'chargeIdExample3242',
        {amount: 100}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refunds',
        headers: {},
        data: {amount: 100},
      });
    });

    it('Sends the correct list request', function() {
      stripe.charges.listRefunds(
        'chargeIdExample3242'
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdExample3242/refunds',
        headers: {},
        data: {},
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
        headers: {},
        data: {},
      });
    });
  });

  describe('updateDispute', function() {
    it('Sends the correct request', function() {
      stripe.charges.updateDispute('chargeIdExample3242', {evidence: 'foo'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute',
        headers: {},
        data: {evidence: 'foo'},
      });
    });
  });

  describe('closeDispute', function() {
    it('Sends the correct request', function() {
      stripe.charges.closeDispute('chargeIdExample3242', {});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute/close',
        headers: {},
        data: {},
      });
    });
  });

  describe('markAsFraudulent', function() {
    it('Sends the correct request', function() {
      stripe.charges.markAsFraudulent('chargeIdExample3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        data: {'fraud_details': {'user_report': 'fraudulent'}},
        headers: {},
      });
    });
  });

  describe('markAsSafe', function() {
    it('Sends the correct request', function() {
      stripe.charges.markAsSafe('chargeIdExample3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        data: {'fraud_details': {'user_report': 'safe'}},
        headers: {},
      });
    });
  });
});
