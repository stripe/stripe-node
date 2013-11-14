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

});
