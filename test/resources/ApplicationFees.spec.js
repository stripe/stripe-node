'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('ApplicationFee Resource', function() {

  describe('list', function() {

    it('Sends the correct request', function() {
      stripe.applicationFees.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees',
        data: {}
      });

    });

  });

  describe('refund', function() {

    it('Sends the correct request', function() {

      stripe.applicationFees.refund('applicationFeeIdExample3242', { amount: 23 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/applicationFeeIdExample3242/refund',
        data: { amount: 23 }
      });

    });

  });

  describe('refunds', function() {

    it('Sends the correct update request', function() {

      stripe.applicationFees.updateRefund(
        'appFeeIdExample3242',
        'refundIdExample2312',
        { metadata: {key: 'value'}}
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
        data: { metadata: {key: 'value'}}
      });

    });

    it('Sends the correct create request', function() {

      stripe.applicationFees.createRefund(
        'appFeeIdExample3242',
        { amount: 100 }
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/application_fees/appFeeIdExample3242/refunds',
        data: { amount: 100 }
      });
    });

    it('Sends the correct list request', function() {
      stripe.applicationFees.listRefunds(
        'appFeeIdExample3242'
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees/appFeeIdExample3242/refunds',
        data: {}
      });
    });

    it('Sends the correct retrieve request', function() {
      stripe.applicationFees.retrieveRefund(
        'appFeeIdExample3242',
        'refundIdExample2312'
      );
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
        data: {}
      });
    });
  });

});
