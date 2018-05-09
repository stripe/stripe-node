'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('IssuerFraudRecord Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.issuerFraudRecords.retrieve('issfr_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/issuer_fraud_records/issfr_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.issuerFraudRecords.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/issuer_fraud_records',
        data: {},
        headers: {},
      });
    });
  });
});
