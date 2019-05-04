'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Charge Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.charges.retrieve('chargeIdFoo123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdFoo123',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
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
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.charges.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges',
        data: {},
        headers: {},
      });
    });
  });

  describe('capture', () => {
    it('Sends the correct request', () => {
      stripe.charges.capture('chargeIdExample3242', {amount: 23});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/capture',
        headers: {},
        data: {amount: 23},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.charges.update('chargeIdExample3242', {description: 'foo321'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        headers: {},
        data: {description: 'foo321'},
      });
    });
  });

  describe('refund', () => {
    it('Sends the correct request', () => {
      stripe.charges.refund('chargeIdExample3242', {amount: 23});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refund',
        headers: {},
        data: {amount: 23},
      });
    });

    it('Incorrect arguments result in an error', () => {
      expect(
        stripe.charges.refund('chargeIdExample123', 39392)
      ).to.be.eventually.rejectedWith(/unknown arguments/i);

      expect(
        stripe.charges.refund({potato: 'chargeIdExample123'})
      ).to.be.eventually.rejectedWith(/must be a string, but got: object/i);

      expect(stripe.charges.refund(442)).to.be.eventually.rejectedWith(
        /must be a string, but got: number/i
      );
    });
  });

  describe('refunds', () => {
    it('Sends the correct update request', () => {
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

    it('Sends the correct create request', () => {
      stripe.charges.createRefund('chargeIdExample3242', {amount: 100});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/refunds',
        headers: {},
        data: {amount: 100},
      });
    });

    it('Sends the correct list request', () => {
      stripe.charges.listRefunds('chargeIdExample3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/charges/chargeIdExample3242/refunds',
        headers: {},
        data: {},
      });
    });

    it('Sends the correct retrieve request', () => {
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

  describe('updateDispute', () => {
    it('Sends the correct request', () => {
      stripe.charges.updateDispute('chargeIdExample3242', {evidence: 'foo'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute',
        headers: {},
        data: {evidence: 'foo'},
      });
    });
  });

  describe('closeDispute', () => {
    it('Sends the correct request', () => {
      stripe.charges.closeDispute('chargeIdExample3242', {});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242/dispute/close',
        headers: {},
        data: {},
      });
    });
  });

  describe('markAsFraudulent', () => {
    it('Sends the correct request', () => {
      stripe.charges.markAsFraudulent('chargeIdExample3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        data: {fraud_details: {user_report: 'fraudulent'}},
        headers: {},
      });
    });
  });

  describe('markAsSafe', () => {
    it('Sends the correct request', () => {
      stripe.charges.markAsSafe('chargeIdExample3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/charges/chargeIdExample3242',
        data: {fraud_details: {user_report: 'safe'}},
        headers: {},
      });
    });
  });
});
