'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('IssuerFraudRecord Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request for issfr ID', function() {
      stripe.issuer_fraud_records.retrieve('issfr_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/issuer_fraud_records/issfr_123',
        data: {},
        headers: {},
      });
    });
    it('Sends the correct request for charge ID', function() {
      stripe.issuer_fraud_records.retrieve('ch_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/issuer_fraud_records?charge=ch_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.issuer_fraud_records.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/issuer_fraud_records',
        data: {},
        headers: {},
      });
    });
  });
});
