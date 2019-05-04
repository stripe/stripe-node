'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('ApplicationFee Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.applicationFees.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees',
        data: {},
        headers: {},
      });
    });
  });

  describe('refund', () => {
    it('Sends the correct request', () => {
      stripe.applicationFees.refund('applicationFeeIdExample3242', {
        amount: 23,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/applicationFeeIdExample3242/refund',
        data: {amount: 23},
        headers: {},
      });
    });
  });

  describe('refunds', () => {
    it('Sends the correct update request', () => {
      stripe.applicationFees.updateRefund(
        'appFeeIdExample3242',
        'refundIdExample2312',
        {metadata: {key: 'value'}}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url:
          '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
        data: {metadata: {key: 'value'}},
        headers: {},
      });
    });

    it('Sends the correct create request', () => {
      stripe.applicationFees.createRefund('appFeeIdExample3242', {amount: 100});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/appFeeIdExample3242/refunds',
        data: {amount: 100},
        headers: {},
      });
    });

    it('Sends the correct list request', () => {
      stripe.applicationFees.listRefunds('appFeeIdExample3242');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees/appFeeIdExample3242/refunds',
        data: {},
        headers: {},
      });
    });

    it('Sends the correct retrieve request', () => {
      stripe.applicationFees.retrieveRefund(
        'appFeeIdExample3242',
        'refundIdExample2312'
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url:
          '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
        data: {},
        headers: {},
      });
    });
  });
});
